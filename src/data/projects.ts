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
    slug: 'homelab-nas',
    title: 'Homelab NAS Server',
    tagline: '72 TB of redundant storage on TrueNAS Scale with ZFS',
    description:
      'A purpose-built network-attached storage server running TrueNAS Scale. Features a 6-drive ZFS RAIDZ2 pool, a separate SSD cache VDEV, automated S3-compatible snapshots to Backblaze B2, and container workloads for Plex, Nextcloud, and a private container registry.',
    tags: ['TrueNAS', 'ZFS', 'Linux', 'Docker', 'Networking'],
    status: 'active',
    coverImage: 'https://r2.cmbadgett.dev/projects/homelab-nas-cover.jpg',
    githubUrl: '#',
    featured: true,
  },
  {
    slug: 'ctf-toolkit',
    title: 'CTF Toolkit',
    tagline: 'A batteries-included CLI for capture-the-flag competitions',
    description:
      'A Python CLI built to accelerate common CTF workflows: automated base-encoding detection and decoding, frequency analysis for classical ciphers, steganalysis helpers (LSB extraction, zsteg wrappers), format string exploit templating, and a local flag tracker with per-challenge notes.',
    tags: ['Python', 'Security', 'CTF', 'Cryptography', 'CLI'],
    status: 'active',
    coverImage: 'https://r2.cmbadgett.dev/projects/ctf-toolkit-cover.jpg',
    githubUrl: '#',
    featured: true,
  },
  {
    slug: 'network-monitor',
    title: 'Homelab Network Monitor',
    tagline: 'Full-stack DNS-level ad blocking and traffic visibility',
    description:
      'A self-hosted network observability stack: Pi-hole for DNS sinkholing paired with Unbound as a recursive resolver, metrics scraped by Telegraf, stored in InfluxDB, and visualised in Grafana. Provides per-device traffic dashboards, alerting on anomalous query spikes, and weekly HTML digest emails.',
    tags: ['Pi-hole', 'Grafana', 'InfluxDB', 'Networking', 'Linux'],
    status: 'active',
    coverImage: 'https://r2.cmbadgett.dev/projects/network-monitor-cover.jpg',
    githubUrl: '#',
    featured: true,
  },
  {
    slug: 'pi-cluster',
    title: 'Raspberry Pi K3s Cluster',
    tagline: 'Four-node ARM Kubernetes cluster for homelab workloads',
    description:
      'A four-node Raspberry Pi 4 (8 GB) cluster running K3s, provisioned with Ansible and managed via Flux CD for GitOps-style deployments. Hosts an internal service mesh, distributed persistent storage via Longhorn, and serves as a platform for learning container orchestration hands-on.',
    tags: ['Kubernetes', 'Ansible', 'GitOps', 'Raspberry Pi', 'Networking'],
    status: 'completed',
    coverImage: 'https://r2.cmbadgett.dev/projects/pi-cluster-cover.jpg',
    githubUrl: '#',
    featured: false,
  },
];
