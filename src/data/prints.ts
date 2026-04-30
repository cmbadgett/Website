export interface Print {
  id: string;
  title: string;
  description: string;
  material: string;
  printer: string;
  imageUrl: string;
  tags: string[];
}

export const prints: Print[] = [
  {
    id: 'rpi4-case',
    title: 'Raspberry Pi 4 Case with Fan Shroud',
    description:
      'Custom enclosure for a Pi 4B with a 40 mm Noctua fan duct that directs airflow directly over the SoC. Keeps the board under 45 °C under sustained load — about 20 °C cooler than passive stock cases.',
    material: 'PETG — Black',
    printer: 'Bambu Lab P1S',
    imageUrl: 'https://r2.cmbadgett.dev/gallery/rpi4-case.jpg',
    tags: ['functional', 'electronics', 'cooling'],
  },
  {
    id: 'cluster-rack',
    title: 'Pi Cluster Rack — 4U',
    description:
      'A stacked rack that holds four Raspberry Pi 4 boards, a managed switch, and power distribution in a tidy 19 cm footprint. Designed in Fusion 360 with individual trays that slide out for maintenance.',
    material: 'PLA+ — Space Grey',
    printer: 'Bambu Lab P1S',
    imageUrl: 'https://r2.cmbadgett.dev/gallery/cluster-rack.jpg',
    tags: ['functional', 'homelab', 'electronics'],
  },
  {
    id: 'articulated-dragon',
    title: 'Articulated Dragon — Flexi Print',
    description:
      'Classic multi-segment flexi dragon printed in place with no supports and no assembly. 187 linked segments with a 0.15 mm layer height. One of those prints you hand to someone who swears FDM is boring.',
    material: 'TPU 95A — Silk Red',
    printer: 'Bambu Lab P1S',
    imageUrl: 'https://r2.cmbadgett.dev/gallery/articulated-dragon.jpg',
    tags: ['art', 'flexible', 'flexi-print'],
  },
  {
    id: 'spool-holder',
    title: 'Wall-Mount Filament Spool Holder',
    description:
      'Parametric spool holder designed to mount directly to the pegboard panel behind the printer. Fits spools from 165 mm to 220 mm wide, with integrated bearings for smooth pay-out and a built-in filament guide arm.',
    material: 'ASA — White',
    printer: 'Bambu Lab P1S',
    imageUrl: 'https://r2.cmbadgett.dev/gallery/spool-holder.jpg',
    tags: ['functional', '3d-printing', 'workshop'],
  },
  {
    id: 'cable-clips',
    title: 'Snap-Fit Cable Management Clips',
    description:
      'Set of stackable, snap-on cable clips sized for ethernet, USB-C, and DC barrel cables. Designed with a dovetail channel so they daisy-chain along desk rails without screws.',
    material: 'PLA — Matte Black',
    printer: 'Bambu Lab P1S',
    imageUrl: 'https://r2.cmbadgett.dev/gallery/cable-clips.jpg',
    tags: ['functional', 'desk', 'cable-management'],
  },
  {
    id: 'screwdriver-wall',
    title: 'Magnetic Screwdriver Wall Mount',
    description:
      'A pegboard-compatible mount that holds up to 12 screwdrivers with embedded 8 mm N52 magnets. Keeps the bench clear and makes it obvious at a glance when something is missing.',
    material: 'PLA+ — Dark Blue',
    printer: 'Bambu Lab P1S',
    imageUrl: 'https://r2.cmbadgett.dev/gallery/screwdriver-wall.jpg',
    tags: ['functional', 'workshop', 'storage'],
  },
  {
    id: 'badge-stand',
    title: 'DEF CON Badge Display Stand',
    description:
      'Low-profile angled stand for displaying conference badges and small PCBs. Friction-fit slot accommodates boards from 2 mm to 6 mm thick. Currently holding the BSIDES badge from last year.',
    material: 'Resin — Clear',
    printer: 'Elegoo Saturn 4 Ultra',
    imageUrl: 'https://r2.cmbadgett.dev/gallery/badge-stand.jpg',
    tags: ['art', 'display', 'resin'],
  },
  {
    id: 'network-switch-tray',
    title: 'Under-Desk Network Switch Tray',
    description:
      'Mounts a small 8-port managed switch to the underside of the desk, out of sight. Cable exit cutouts are positioned to route neatly through the desk grommet without kinking.',
    material: 'PETG — Black',
    printer: 'Bambu Lab P1S',
    imageUrl: 'https://r2.cmbadgett.dev/gallery/switch-tray.jpg',
    tags: ['functional', 'homelab', 'desk'],
  },
];
