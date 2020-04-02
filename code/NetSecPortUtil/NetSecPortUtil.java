import java.io.*;
import java.net.InetSocketAddress;
import java.net.Socket;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;
import java.util.concurrent.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class NetSecPortUtil {
    private static String fromIp = "";
    private static String toIp = "";
    private static int timeout = 200;

    public static void main(String[] args) throws ExecutionException, InterruptedException {
        //Regex to get last digits in ips
        Pattern p = Pattern.compile("(\\d+)(?!.*\\d)");
        StringBuilder builder = new StringBuilder();

        //Check for Config and load properties
        inputProperties();

        Matcher fromMatcher = p.matcher(fromIp);
        Matcher toMatcher = p.matcher(toIp);

        boolean from = fromMatcher.find();
        boolean to = toMatcher.find();

        if (!(from && to)) {
            System.out.println("regex did not match ip addr, to or from. Check config or delete to reset.");
            System.exit(1);
        }

        int fromIpNumeral = Integer.parseInt(fromMatcher.group());
        int toIpNumeral = Integer.parseInt(toMatcher.group());


        while (fromIpNumeral <= toIpNumeral) {

            String currentIp = fromIp.substring(0, fromIp.lastIndexOf(".")) + "." + fromIpNumeral;


            //Open thread pool to execute a task - this will expand to however many threads it can. No fixed thread pool
            final ExecutorService executorService = Executors.newCachedThreadPool();

            //Get a list of future results, as they could be running concurrently during iteration
            final List<Future<PortScanResult>> futureList = new ArrayList<>();

            //Loop through all possible open ports and add a thread task to complete a scan
            for (int port = 1; port <= 65535; port++) {
                System.out.println("Scanning port " + port + " on host: " + currentIp);
                futureList.add(checkPort(executorService, currentIp, port, timeout));
            }

            //Shut down thread pool
            executorService.shutdown();

            for (final Future<PortScanResult> f : futureList) {
                if (f.get() != null) {
                    if (f.get().isOpen())
                        builder.append("Port " + f.get().getPortNumber() + " is Open on Host " + currentIp + "\n");
                }
            }

            fromIpNumeral++;
        }


        System.out.println(builder);

    }

    /**
     * Check if a port allows a socket connection
     * @param es - Thread to execute on
     * @param ipToScan - ip to execute socket connection on
     * @param port - port to scan
     * @param timeout - time to wait for socket connection
     * @return a PortScanResult object - contains a boolean if the scan was true, along with the port that was scanned
     */
    public static Future<PortScanResult> checkPort(final ExecutorService es, final String ipToScan, final int port, final int timeout) {
        return es.submit(new Callable<PortScanResult>() {
            @Override
            public PortScanResult call() {
                Socket socket = new Socket();
                try {

                    //open socket to port
                    socket.connect(new InetSocketAddress(ipToScan, port), timeout);
                    socket.close();
                    return new PortScanResult(port, true);
                } catch (Exception e) {
                    return new PortScanResult(port, false);
                }
            }
        });
    }

    /**
     * function to load and generate properties file on program execution.
     */
    private static void inputProperties() {
        try (InputStream inputStream = new FileInputStream("./config.properties")){

            Properties properties = new Properties();

            properties.load(inputStream);

            fromIp = properties.getProperty("fromIp");
            toIp = properties.getProperty("toIp");
            timeout = Integer.parseInt(properties.getProperty("timeout"));

        } catch (FileNotFoundException e) {
            File file = new File("./config.properties");
            try {

                System.out.println("Could not find config file! Generating with defaults: \n" +
                        "FromIp: 127.0.0.1\n" +
                        "ToIp: 127.0.0.1\n" +
                        "Timeout: 200\n");

                Properties properties = new Properties();
                file.createNewFile();
                properties.put("fromIp", "127.0.0.1");
                properties.put("toIp", "127.0.0.1");
                properties.put("timeout", "200");
                properties.store(new FileOutputStream(file.getPath()) ,"Load these properties on program execution");

                inputProperties();
            } catch (IOException ex) {
                ex.printStackTrace();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
