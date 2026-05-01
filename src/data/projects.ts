export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  status: 'active' | 'completed' | 'wip';
  coverImage: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: 'flipper-zero-wifi-attacks',
    title: 'Flipper Zero Wi-Fi Attack Analysis',
    tagline: 'WPA2 deauth + Evil Twin attacks with a $200 pocket device',
    description:
      'University of Akron CIS senior capstone. Demonstrated two wireless attack vectors against WPA2-Personal networks using a Flipper Zero with ESP32 Wi-Fi Dev Board (Marauder firmware): a deauthentication handshake capture cracked offline with Hashcat on a GPU-accelerated Parrot OS VM, and an Evil Twin captive portal harvesting credentials through spoofed Apple, Starbucks, and TP-Link login pages. Verified mitigations including WPA3-Personal (fully blocks hash extraction), strong passphrases, and user awareness.',
    tags: ['Security', 'Wi-Fi', 'Pentesting', 'Flipper Zero', 'Hashcat', 'WPA2'],
    status: 'completed',
    coverImage: '/images/flipper-zero-cover.png',
    featured: true,
  },
];
