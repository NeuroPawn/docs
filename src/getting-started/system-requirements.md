# System Requirements

The **NeuroPawn Desktop Application** supports real-time EEG acquisition and analysis using USB-connected EEG hardware sampling at **125 Hz**. This section outlines the minimum and recommended system specifications required for smooth operation across major platforms.

## ✅ Supported Platforms

The NeuroPawn application is cross-platform and compatible with:

- **Windows** 10 and later (x64)
- **macOS** 11 (Big Sur) and later (Intel or Apple Silicon)
- **Linux** (Ubuntu 20.04+, Debian-based distros recommended)

---

## 🧠 EEG Hardware Interface Requirements

- **Connection Type**: USB-C serial communication  
- **Sampling Rate**: 125 Hz  
- **Data Format**: Typical 24-bit resolution, multichannel (e.g., 8–16 channels)

> Ensure the EEG device is properly recognized by the system as a serial (COM/tty) port.

---

## 🧰 Minimum System Requirements

| Component       | Specification                                           |
|----------------|---------------------------------------------------------|
| **CPU**        | Dual-core 2.0 GHz (e.g., Intel i3 / AMD Ryzen 3)        |
| **RAM**        | 4 GB                                                    |
| **Disk Space** | 500 MB free space for app + 100 MB/hour for EEG logs    |
| **Bandwidth**  | USB 2.0 or higher (480 Mbps or more)                    |
| **Display**    | 1280x720 resolution                                     |

---

## 🚀 Recommended System Requirements

| Component       | Specification                                            |
|----------------|----------------------------------------------------------|
| **CPU**        | Quad-core 2.5+ GHz (e.g., Intel i5 / M1 / Ryzen 5)       |
| **RAM**        | 8 GB or more                                             |
| **Disk Space** | 1 GB free + 500 MB/hour for recordings & metadata        |
| **Bandwidth**  | USB 3.0 or USB-C native (5 Gbps+)                        |
| **Display**    | 1920x1080 resolution or higher                           |

---

## 📦 Additional Notes

- The NeuroPawn app requires **serial port access**.  
  - On **Linux/macOS**, you may need to add your user to appropriate groups (e.g., `dialout`, `tty`).
- Real-time data logging may consume additional disk space over time — ensure sufficient storage if recording continuously.
- CPU and RAM usage scales with the number of EEG channels and enabled signal processing modules (e.g., filtering, artifact removal).