const LECTURES = [
{title:"Lecture 1",color:"#2f5bea",questions:[
[`What are the elements of a typical network, and how are they divided into hardware and software?`,`The four elements are devices, media, rules and messages, i.e. services tied together by rules that work together to send messages. Devices and media are the physical elements (hardware) of the network. Services and processes are the software programs that run on the networked devices to achieve communication.`,`Lecture 1 — Pages 6, 7`],
[`Differentiate between end devices and intermediary devices, giving examples.`,`End devices are the source or destination of a message. Examples: computers (workstations, laptops, file and web servers), network printers, VoIP phones, security cameras and mobile handheld devices. Intermediary devices connect individual hosts to the network and connect multiple networks to form an internetwork, ensuring data flows across the network. Examples: network access devices (hubs, switches, wireless access points), internetworking devices (routers) and security devices (firewalls).`,`Lecture 1 — Pages 8, 9, 10`],
[`List the functions performed by processes running on intermediary network devices.`,`They regenerate and retransmit data signals. They maintain information about the pathways that exist through the network and internetwork. They notify other devices of errors and communication failures. They direct data along alternate pathways when there is a link failure. They classify and direct messages according to QoS priorities. Intermediary devices direct the path of the data but do not generate or change the data content.`,`Lecture 1 — Page 11`],
[`What types of media are used in modern networks?`,`Modern networks primarily use three types of media to interconnect devices and provide the pathway for data transmission: (1) wireless transmission, (2) copper (metallic wires within cables), and (3) fiber optics (glass or plastic fibers in fiber optic cable).`,`Lecture 1 — Page 12`],
[`Explain how networks support the way we live, learn and work.`,`Live: The Internet became an integral part of daily routines. It created new forms of communication such as instant messaging (real-time communication between two or more people), weblogs (web pages created by an individual) and podcasting (a website with audio files available for download).
Learn: Education involves communication, collaboration and meetings, so institutions build robust and reliable networks to enhance education and maximize the dissemination of knowledge. Data networks support courseware, administration, enrollment and teacher-student communication. Online learning decreases time and travel cost and ensures employees are adequately trained.
Work: Networks were first used by businesses internally to record and manage financial information, customer information and payroll. Now business applications can be accessed remotely as if employees were on site, and workers in any location can reach each other and access multiple resources.`,`Lecture 1 — Pages 2, 3, 4, 5`],
[`Describe the journey of an instant message across the network.`,`(1) The message is converted to binary bits before transmission on the medium. (2) The NIC generates electrical signals to represent the bits and places them on the medium; they arrive at the first network device. (3) The bits pass from device to device in the local area, and usually through a router as they leave it. (4) The bits are transmitted to the devices that connect the local networks, which can be dozens or hundreds of devices routing them to the destination. (5) Near the destination, the bits again pass through local devices. (6) The destination device reads the bits and converts them back to the human-readable message.`,`Lecture 1 — Pages 14, 15, 16`],
[`Compare LANs and WANs.`,`A LAN spans a small geographical area, interconnects end devices, is administered by a single organization and provides high-speed bandwidth to internal devices. A WAN interconnects LANs, is administered by multiple service providers and provides slower-speed links between LANs.`,`Lecture 1 — Page 18`],
[`Define the Internet, an intranet and an extranet, and state how they differ.`,`Internet: a worldwide collection of interconnected networks, not owned by any individual or group.
Intranet: owned by a single organization and used privately to share information inside it. It is a private network, so only users with a valid username and password can use it. It is highly secure, has a limited number of connected devices and few visitors, and is used for employee information, the telephone directory, etc.
Extranet: owned by one or many organizations and managed on a contractual basis between them. It shares information between internal and external members. It is also private (valid username and password required) and is used to check status, access data, send mail, place orders, etc.`,`Lecture 1 — Pages 19, 20, 21`],
[`Compare Peer-to-Peer and Client/Server network systems.`,`In P2P, all connected computers are equal and all devices have the same abilities to use the available resources. In Client/Server, a single central server or authority manages all processing, data storage and decision-making for the connected clients. All client requests are handled by the central server, data is stored and maintained at one primary location, and system control and administrative decisions are managed centrally.`,`Lecture 1 — Pages 22, 23`],
[`Define Cloud, Cluster and Virtualised network systems.`,`Cloud: shared infrastructure, a huge pool of systems that provides various IT services.
Cluster: a group of computers acting as a whole to provide users with a set of network resources. Each single computer is a cluster node, and the administrator can arbitrarily add or delete nodes.
Virtualised: software-based separation of network traffic, a way to abstract from the physical network elements.`,`Lecture 1 — Pages 23, 24`],
[` Why do computer applications need network services, and which protocol governs each service?`,`People send and receive a variety of messages using computer applications, and these applications require services provided by the network. Each service is governed by a protocol (“rule”): World Wide Web uses HTTP (Hypertext Transport Protocol); e-mail uses SMTP (Simple Mail Transport Protocol) and POP (Post Office Protocol); instant messaging (Jabber, AIM) uses XMPP (Extensible Messaging and Presence Protocol) and OSCAR (Open System for Communication in Realtime); IP telephony uses SIP (Session Initiation Protocol).`,`Lecture 1 — Page 13`]
]},
{title:"Lecture 2",color:"#0e9f8e",questions:[
[`What are the four elements of any communication?`,`For communication, devices need more than a connection; they must agree on “how” to communicate. The four elements are: Protocols (the rules communications follow), Transmitter (the source of the signal representing data), Receiver (the destination that receives the signals), and Channel (media/transmission medium, the path between sender and receiver).`,`Lecture 2 — Page 2`],
[`List and briefly explain the requirements of network protocols.`,`There are five requirements. (1) Message size (segmentation): the message is divided into small parts called segments before sending. (2) Message formatting and encapsulation. (3) Message encoding: converting information into a form acceptable for transmission. (4) Message timing: access method, flow control and response timeout. (5) Message delivery options: unicast, multicast and broadcast.`,`Lecture 2 — Page 3`],
[`What is segmentation? Explain its related operations and benefits.`,`Segmentation is breaking messages into smaller units (pieces). Two related operations: multiplexing, taking multiple streams of segmented data and interleaving them together, and sequencing, numbering the segments so the message can be reassembled at the destination. Benefits: it increases speed, because large amounts of data can be sent without tying up the link (better bandwidth utilization), and it increases efficiency, because only failed segments are retransmitted, not the whole stream.`,`Lecture 2 — Pages 4, 5`],
[`Explain message formatting and encapsulation, and message encoding.`,`Each piece of a message must use a specific format or structure, which depends on the type of message and the channel used to deliver it. Encapsulation is the process of protocols adding their information to the packet. Encoding converts the stream of bits into signal patterns detectable by the next device in the path. The signaling method defines how the bit values “1” and “0” are represented on the physical medium, and it varies with the type of medium (example: Manchester encoding).`,`Lecture 2 — Pages 6, 7`],
[`What does message timing include?`,`Flow control manages the rate of transmission and how much information can be sent and how fast. Response timeout manages how long a device waits for a reply from the destination. Access method determines when someone can send a message. Collisions are signal corruption that occurs when more than one device sends at the same time. Some protocols are proactive and try to prevent collisions, while others are reactive and recover after a collision occurs.`,`Lecture 2 — Page 8`],
[`Compare unicast, multicast and broadcast message delivery.`,`Unicast is one-to-one communication. Multicast is one-to-many, typically not all. Broadcast is one-to-all.`,`Lecture 2 — Page 9`],
[`What are the types and functions of network protocols?`,`Network protocols define a set of rules and can be implemented in software, hardware or both. Each protocol has its own function, format and rules. Types: network communications (enable devices to communicate), network security (authentication, data integrity, encryption), routing (routers exchange route information and select the best path) and service discovery (automatic detection of devices or services). Functions: addressing (identifies sender and receiver), reliability (guaranteed delivery), flow control (efficient data rate), sequencing (uniquely labels each segment), error detection (detects corruption during transmission) and application interface (process-to-process communication between network applications).`,`Lecture 2 — Pages 10, 11`],
[`What is a layered model and what are its benefits? Name the models used to describe network operations.`,`Networks operate on a layered model, and two models describe network operations: OSI (Open Systems Interconnection) and TCP/IP. A layered model splits one large problem (moving data between two hosts) into independent jobs, each with a defined input and output. Each layer performs its function independently and offers service to the next layer. Functions at each layer are developed independently and simultaneously, and a change in standards in one layer need not affect existing software in another. For example, a NIC vendor builds layers 1 and 2, an OS vendor builds layers 3 and 4, and an application developer builds layer 7. None needs to know how the others work internally; they only agree on what each layer hands to the layer below.`,`Lecture 2 — Pages 12, 13, 14`],
[`Explain the functions and unit of communication of the Physical, Data Link and Network layers in the OSI model.`,`Physical: represents bits as electrical signals and moves individual bits from one hop (node) to the next. The unit is the bit.
Data Link: defines how data is formatted for transmission, controls access to the network and moves frames from one hop to the next (hop-to-hop delivery, checked at each node). The unit is the frame.
Network: selects the best path to route packets from source host to destination host, and provides logical addressing (IP) and path selection (source-to-destination delivery). The unit is the IP packet.`,`Lecture 2 — Pages 13, 16, 17, 18`],
[`Explain the functions of the Transport, Session, Presentation and Application layers in the OSI model.`,`Transport: end-to-end connections, handling transportation between two hosts. It provides reliable process-to-process delivery of a message, where a process is created on each device when communication starts. The unit is the segment.
Session: dialog control and synchronization.
Presentation: translation, compression and encryption.
Application: provides services to the user. The unit is the message.`,`Lecture 2 — Pages 13, 19, 20, 21, 22`],
[` Define network bandwidth.`,`Network bandwidth is the maximum capacity of a wired or wireless communications link to deliver data via a network connection in a given amount of time. It is typically defined as the number of bits sent in one second. Bandwidth and capacity are terms used interchangeably to describe the speed at which data is delivered.`,`Lecture 2 — Page 5`],
[` Compare the OSI model and the TCP/IP model, and show how their layers map to each other.`,`OSI has seven layers, and TCP/IP has four. OSI Application, Presentation and Session correspond to the TCP/IP Application layer (HTTP, DNS, DHCP, FTP). OSI Transport corresponds to the TCP/IP Transport layer (TCP, UDP). OSI Network corresponds to the TCP/IP Internet layer (IPv4, IPv6, ICMPv4, ICMPv6). OSI Data Link and Physical correspond to the TCP/IP Network Access layer (Ethernet, WLAN, SONET, SDH). A networking model is only a representation of network operation, not the actual network.`,`Lecture 2 — Page 12`],
[` List the seven layers of the OSI model with the data unit and main function of each.`,`7 Application (data): interface to applications, e.g. HTTP, DNS, SMTP, FTP.
6 Presentation (data): format, compression, encryption.
5 Session (data): sets up and tears down sessions between hosts.
4 Transport (segment): end-to-end delivery and flow control, e.g. TCP, UDP.
3 Network (packet): logical addressing and routing, e.g. IP.
2 Data Link (frame): MAC addressing and delivery on one link, e.g. Ethernet, Wi-Fi.
1 Physical (bits): signals on the medium, e.g. cables, NIC electronics.`,`Lecture 2 — Page 13`],
[` Explain the interaction between layers in the OSI model.`,`Based on the diagram: on the sending device, each layer from 7 down to 2 adds its header (H7 … H2), the data link layer also adds a trailer (T2), and the bits are sent over the transmission medium. At the receiving device each layer removes its header as the data moves up. Each layer communicates with the same layer on the other device through a peer-to-peer protocol, and intermediate nodes involve only the Network, Data Link and Physical layers.`,`Lecture 2 — Page 15`],
[` Which OSI layers are implemented in software and which in hardware, and what is the role of the Data Link layer?`,`The upper layers are implemented in software, while the Physical layer and the Data Link layer are implemented in hardware. The Data Link layer links the software and hardware layers. Physical devices devoted to the Data Link layer, such as the PC NIC, have both hardware and software components.`,`Lecture 2 — Page 14`]
]},
{title:"Lecture 3",color:"#e8772e",questions:[
[`What is the TCP/IP protocol suite, and what is the function of each of its layers?`,`TCP/IP is the protocol suite used by the internet and includes many protocols. Application: represents data to the user plus encoding and dialog control. Transport: supports communication between diverse devices across diverse networks. Internet: determines the best path through the network. Network Access: controls the hardware devices and media that make up the network.`,`Lecture 3 — Page 2`],
[`Explain the functions of HTTP, TCP, IP and Ethernet in the protocol stack.`,`HTTP governs how a web server and a web client interact and defines content and format. TCP manages individual conversations, provides guaranteed delivery and manages flow control. IP delivers messages globally from sender to receiver. Ethernet delivers messages from one NIC to another NIC on the same Ethernet LAN. In a protocol stack, communication uses several protocols, and each has its own function and format.`,`Lecture 3 — Page 3`],
[`Distinguish between end-to-end and hop-by-hop communication in TCP/IP.`,`Communication at the application, transport and network layers is end-to-end between source A and destination B (a message at the application layer, a segment at the transport layer). Communication at the data link layer is hop-by-hop across each link, with a frame at each hop. Communication at the physical layer is also hop-by-hop, with bits sent over each link.`,`Lecture 3 — Pages 4, 5, 6`],
[`Describe the steps of a complete communication process in TCP/IP.`,`(1) Data is created at the application layer of the source end device. (2) The data is segmented and encapsulated as it passes down the protocol stack in the source. (3) The data is generated onto the media at the network access layer. (4) The data is transported through the internetwork, which consists of media and any intermediary devices. (5) The data is received at the network access layer of the destination end device. (6) The data is de-encapsulated and reassembled as it passes up the stack in the destination. (7) The data is passed to the destination application at the application layer.`,`Lecture 3 — Page 7`],
[`Explain message segmentation and multiplexing during data transfer in the network.`,`Segmentation breaks the entire message of communication (user data) into pieces. Multiplexing is interleaving the pieces. The example applies these protocol requirements to communication between a web server and a web browser, hosted on two different hosts and two different networks.`,`Lecture 3 — Pages 8, 9, 10`],
[`Explain the encapsulation process and the names of the PDUs passing down the stack.`,`Encapsulation is a top-down process for each PDU of the entire message. The protocol at each level does its process and passes the PDU down to the next level. This repeats at each layer until the data is sent out as a bit stream. At each stage the PDU gets a different name to reflect its new function. PDUs passing down the stack are: Data (data stream), Segment, Packet, Frame, Bits (bit stream).`,`Lecture 3 — Pages 9, 11`],
[`What is de-encapsulation, and in what order does the data pass?`,`Data is de-encapsulated as it moves up the stack. When a layer completes its process, it strips off its header and passes the data up to the next level. This repeats at each layer until a data stream is submitted to the application layer. The order is: received as bits (bit stream), then frame, packet, segment, and finally data (data stream).`,`Lecture 3 — Page 12`],
[`Differentiate between network addresses and data link addresses.`,`Network addresses are the source and destination IP addresses. They deliver the IP packet from the original source to the final destination, on the same network or a remote network. Data link addresses are the source and destination data link addresses. They deliver the data link frame from one network interface card (NIC) to another NIC on the same network.`,`Lecture 3 — Page 13`],
[`Define multiplexing and de-multiplexing, and explain how TCP and UDP perform them.`,`Multiplexing is gathering data from multiple application processes of the sender, enveloping it with a header, and sending it as a whole to the intended receiver. De-multiplexing is delivering received segments at the receiver side to the correct application layer processes. UDP and TCP do this by including two special fields in the segment headers: the source port number field and the destination port number field.`,`Lecture 3 — Page 14`],
[`Explain, with the WhatsApp and Hike example, how multiplexing and de-multiplexing are done. What are their types?`,`The transport layer is the junction for multiplexing and de-multiplexing. The two types are connectionless and connection-oriented multiplexing/de-multiplexing. To send data to an application at the destination, the sender must know the destination IP address and the port number of that application. In the example, A must give B’s IP address and the destination port number of WhatsApp when sending through WhatsApp, and B’s IP address and the destination port number of Hike when sending through Hike. Messages from both apps get headers (source IP, destination IP, source port, destination port) and are sent as a single message; this is multiplexing. At the destination, the received message is separated and each part goes to the right application according to the destination port number; this is de-multiplexing.`,`Lecture 3 — Pages 15, 16`],
[` Give examples of the protocols that operate at each layer of the TCP/IP protocol suite.`,`Application: SMTP, FTP, HTTP, DNS, SNMP, TELNET. Transport: SCTP, TCP, UDP. Internet: IP, with ICMP, IGMP, RARP and ARP. Network Access: protocols defined by the underlying networks (host-to-network). In the web example, the stack is HTTP, TCP, IP, Ethernet.`,`Lecture 3 — Page 3`]
]}
];

const $ = (s, r = document) => r.querySelector(s);
const state = {}; // key -> "right" | "wrong"
const total = LECTURES.reduce((n, l) => n + l.questions.length, 0);
const app = $("#app");
const cards = [];

function el(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
}

function build() {
  $("#totalQ").textContent = total;
  $("#totalL").textContent = LECTURES.length;
  LECTURES.forEach((lec, li) => {
    const id = "lecture-" + (li + 1);
    const a = el("a", "", `${lec.title} (${lec.questions.length})`);
    a.href = "#" + id;
    a.style.setProperty("--c", lec.color);
    $("#jump").appendChild(a);

    const sec = el("section", "lec");
    sec.id = id;
    sec.style.setProperty("--c", lec.color);
    const head = el("div", "lec-head");
    head.append(el("h2", "", lec.title), el("span", "", `${lec.questions.length} Questions`));
    sec.appendChild(head);

    lec.questions.forEach(([q, ans, src], qi) => {
      const key = `${li}-${qi}`;
      const card = el("article", "card");
      card.append(el("span", "qnum", `Question ${qi + 1}`), el("h3", "q", q));

      const toggle = el("button", "btn reveal", "Show answer");
      const box = el("div", "ans");
      ans.split("\n").forEach(line => box.appendChild(el("p", "", line)));
      box.appendChild(el("p", "src", "Source: " + src));

      const rate = el("div", "rate");
      rate.appendChild(el("small", "", "Did you answer it correctly?"));
      const yes = el("button", "yes", "✓ I got it right");
      const no = el("button", "no", "✗ I got it wrong");
      rate.append(yes, no);
      const verdict = el("div", "verdict");

      const setOpen = open => {
        card.classList.toggle("open", open);
        toggle.textContent = open ? "Hide answer" : "Show answer";
      };
      toggle.onclick = () => setOpen(!card.classList.contains("open"));
      const mark = r => { state[key] = r; paint(); update(); };
      yes.onclick = () => mark("right");
      no.onclick = () => mark("wrong");

      function paint() {
        const r = state[key];
        card.classList.toggle("right", r === "right");
        card.classList.toggle("wrong", r === "wrong");
        yes.classList.toggle("on", r === "right");
        no.classList.toggle("on", r === "wrong");
        verdict.textContent = r === "right" ? "Correct — well done." : r === "wrong" ? "Wrong — review the correct answer shown above." : "";
      }
      card.append(toggle, box, rate, verdict);
      sec.appendChild(card);
      cards.push({ card, setOpen, paint, key });
    });
    app.appendChild(sec);
  });
  update();
}

function update() {
  const vals = Object.values(state);
  const ok = vals.filter(v => v === "right").length;
  const bad = vals.length - ok;
  const pct = Math.round((vals.length / total) * 100);
  $("#okCount").textContent = `${ok} correct`;
  $("#badCount").textContent = `${bad} wrong`;
  $("#doneText").textContent = `${vals.length} / ${total} solved (${pct}%)`;
  $("#progressFill").style.width = pct + "%";
  $("#progress").setAttribute("aria-valuenow", pct);
}

$("#showAll").onclick = () => cards.forEach(c => c.setOpen(true));
$("#hideAll").onclick = () => cards.forEach(c => c.setOpen(false));
$("#reset").onclick = () => {
  Object.keys(state).forEach(k => delete state[k]);
  cards.forEach(c => { c.setOpen(false); c.paint(); });
  update();
  window.scrollTo({ top: 0, behavior: "smooth" });
};

build();
