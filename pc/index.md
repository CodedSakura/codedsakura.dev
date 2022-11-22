# CodedSakura's PC

So you want to know about what sits in my personal computer?  
You've come to the right place!

## Overview

- Built: 2019H2 - present
- 1st time assembled on 2020-03-01
- CPU: Intel i5-9600KF
- GPU: GeForce RTX 3070
- RAM: 32 GB DDR4 @ 2666 MHz
- PSU: NZXT E650
- KB1: Corsair K70 MK2
- KB2: Keychron K3
- Storage1: 1TB NVMe SSD
- Storage2: 4TB HDD
- Mouse: Corsair Harpoon Wireless RGB
- Monitor 1: Samsung 32" 4K 60 Hz
- Monitor A: GIGABYTE 27" '2K' 240 Hz

## Details

For each component I've added a small Q&A about why that specific thing, if you have more questions on my choices, feel
free to message me on Discord or write me an e-mail.

### CPU

The CPU I've chosen is an [Intel Core i5-9600KF](https://www.intel.com/content/www/us/en/products/sku/190884/intel-core-i59600kf-processor-9m-cache-up-to-4-60-ghz/specifications.html).

* LGA1151 socket
* 6 cores, 1 thread per core
* runs from 0.8 GHz up to 4.6 GHz
* not overclocked
* L1d & L1i cache: 192 KiB, L2: 1.5 MiB, L3: 9 MiB
* No integrated GPU

**Q&A:**
- Why Intel?
  - At the time when I was building my PC, Intel CPUs were more expensive than AMD CPUs, but the motherboards where the
    other way around. Resulting in a very similar price for either one. I had always used Intel-based builds up to then,
    so I was slightly biased for it already. Combined with a poor experience with an AMD-based HP laptop I decided to go
    with Intel.
- Why specifically i5-9600KF?
  - The i5-9600 is still one of the best price-to-performance 9th gen Intel CPUs, and might still be a very good 
    candidate for the LGA1151 socket. F (required discrete graphics) - due to cost reduction and already having a
    dedicated GPU at the time (GTX 1050ti), K (unlocked) - because that's what was available.
- Do I plan to switch to AMD?
  - I definitely do consider it, but currently have no real preference for either (2022-08-22).

### GPU

The GPU I currently have is a GIGABYTE branded GeForce RTX 3070.
Specifically [GeForce RTX 3070 GAMING OC 8G (rev 2.0)](https://www.gigabyte.com/Graphics-Card/GV-N3070GAMING-OC-8GD-rev-20)

**Q&A**
- Why GeForce?
  - Not much to say here, in my opinion AMD GPUs are nowhere near as good (or maybe popular) as GeForce ones.
- Why the RTX 3070?
  - It was a price and performance balance in my case: while I don't need much rendering power on a daily basis, I do
    have two large monitors and I tend to game at 1440p. From my research the 3060 would have entirely satisfied me if
    I didn't want to run the two monitors in conjunction with my VR headset... The 3070 felt like a nice balance with
    not costing too much and delivering enough graphical power for all my needs.
- Why GIGABYTE?
  - I really like the GPUs backplate design, and also that's what you see the most (if the card is horizontally 
    installed).
- What before?
  - As stated on the top, I built my PC at 2020Q1, before the RTX 30-series were even announced. At the time of building
    I had a GTX 1050 ti (also GIGABYTE branded), but that now lives in my bother's PC, as it's a low profile card and my
    brothers PC is also low-profile. Between the 1050 and my current 3070 I used a GTX 970 which I bought from a family
    friend...

### RAM

I have 32 GB total ram, on 2 identical sticks of 16 GB. They're HyperX Predator, but it seems that Kingston has 
rebranded them to be called [Kingston FURY Renegade](https://www.kingston.com/unitedkingdom/en/memory/gaming/kingston-fury-renegade-ddr4-memory).
Specifically I chose 16GB DDR4-2666 CL13. And yes, they're installed in parallel to allow dual-channel.

**Q&A**
- Why 2 * 16GB?
  - I started out with just a single 16 GB stick, but as time went on I started to realize that I'd benefit from an 
    extra 16 GB.
- Why not 4 * 8GB?
  - Easy: the motherboard I have does not have quad-channel RAM and 16 GB is cheaper than 2 * 8 GB.
- Why 2666 MHz?
  - From what I read at the time Intel, unlike AMD, does not benefit from RAM that's clocked above the CPU's max RAM 
    speed.
- Why CL-13?
  - The CAS Latency was actually the main thing I was looking at when searching from RAM. As the previous answer states,
    Intel has no benefits for RAM speeds above 2666 (in my case), so I went for the 2nd best thing: CL speed. The RAM I
    found usually had CL-16, but I managed to spot the HyperX Predator variant with CL-13. I have no idea if it would
    even make a difference between CL-13 and CL-18 in my build, but as it didn't incur much extra cost, I decided: why
    not?

### Motherboard

When looking for base parts for my build back in 2020Q3, I for some reason decided that I _needed_ a USB-C port. In my
searches a motherboard kept popping up that was both cheap, and had a USB-C port. So I ended up getting it.
It's a [GIGABYTE Z390](https://www.gigabyte.com/us/Motherboard/Z390-M-rev-10) which features the following nice-to-haves:

* Micro ATX form factor
* 2 NVMe slots for 22110/2280 M.2 SSDs
* reinforced PCIe slot
* extensive BIOS with fan control options
* M.2 socket for an Intel CNVi wireless module (which I've been planning on installing for about 1.5 years now)

**Q&A**
- Do I like it?
  - I don't hate it.

### PSU
I went all out on the PSU and ended up with a [NZXT E650](https://web.archive.org/web/20210518105638/https://www.nzxt.com/products/e650),
which seems to have been rebranded to the [NZXT C650](https://nzxt.com/product/c650). It's a modular, 80+ gold rated PSU.
Weirdly enough, I'm pretty sure it's the loudest component in my PC case...

**Q&A**
- Why 650 W?
  - When doing calculations about potential power usage, the number I came up with was around 600.
- Why modular?
  - I dislike clutter in my PC case!
- Why 80+ gold rated?
  - I care about the environment and my power bills!
- Why not twice as cheap 80+ bronze PSU?
  - I really hope that this PSU outlives my PC by a lot. I could not rely on a cheap PSU to not fail on me.

### Storage
Before starting this PC building process I had already owned a Samsung? 240 GB SATA SSD. Since I wanted an upgrade, I
decided to get a NVMe M.2 SSD. Comparing spec sheets and prices I ended up with 
[GIGABYTE NVMe SSD 1TB](https://www.gigabyte.com/SSD/GIGABYTE-NVMe-SSD-1TB) (yes, I too was surprised it's called just 
that)

As I acquired more files (as one does) I started to feel a need for extra storage space. An HDD is a very convenient
solution to this problem. I have a [Seagate BarraCuda 4TB](https://www.seagate.com/gb/en/products/hard-drives/barracuda-hard-drive/),
5400 rpm. It's quiet, it's cheap ~~and I need to pray to it every night, so it doesn't spontaneously die.~~

### Case
For my fancy new computer parts I decided that I want a fancy new computer case. Of the multitude of options I most 
liked the [LIAN LI Lancool-II](https://lian-li.com/product/lancool-ii/) for it's very pretty design and zero effort
cable management solutions.

### Cooling
CPU cooler: some off-brand cheapo tower cooler (don't have the box accessible)  
Fans: 3 * Xilence  
Airflow direction: Front to back  
Airflow pressure: Positive pressure: 2 in, 1 out

### Peripherals

Main keyboard: [Corsair K70 RGB MK.2](https://www.corsair.com/us/en/k70-rgb-gaming-keyboard)

Secondary / take-anywhere keyboard: [Keychron K3](https://www.keychron.com/pages/keychron-k3-wireless-mechanical-keyboard)
(75%) with Low Profile Optical switches, mix of brown and black.

Mouse: [Corsair Harpoon RGB Wireless](https://www.corsair.com/us/en/Categories/Products/Gaming-Mice/HARPOON-RGB-WIRELESS-Gaming-Mouse/p/CH-9311011-NA)

Headphones: [Sony WH-1000XMK3](https://www.sony.com/ug/electronics/headband-headphones/wh-1000xm3)

Microphone: condenser streaming microphone [YMC 1030](https://www.yenkee.eu/studio-microphone-set/ymc-1030) that feels
so off-brand, since it's an XLR microphone that ships with an XLR to 3.5mm cable...

Microphone amplifier: [Behringer U-Phoria UMC22](https://www.behringer.com/product.html?modelCode=P0AUX)

Main display: [Samsung UJ590](https://www.samsung.com/us/computing/monitors/uhd-and-wqhd/32-uj590-uhd-monitor-lu32j590uqnxza/)

Primary display: [GIGABYTE M27Q X](https://www.gigabyte.com/Monitor/M27Q-X)

Speakers: [VIGOOLE C2018](https://naobzorah.ru/pcacoustic/vigoole_c2018), 'inherited' from parents

Gaming controller: [Sony PlayStation DualSense (5)](https://www.playstation.com/en-us/accessories/dualsense-wireless-controller/), 
white

VR headset: [Valve Index](https://www.valvesoftware.com/en/index)
