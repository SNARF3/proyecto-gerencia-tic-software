export const team = [
  {
    name: 'Adriana Alvarez',
    role: 'Subgerente de Software',
    bio: 'Conduce al equipo con organización y visión estratégica. Su liderazgo asegura que cada proyecto avance con claridad y compromiso.',
    gradient: 'grad-a',
  },
  {
    name: 'Adrian Gonzales',
    role: 'Líder de Desarrollo',
    bio: 'Le apasiona investigar nuevas tendencias y proponer ideas frescas. Es el motor creativo que impulsa la innovación dentro del grupo.',
    gradient: 'grad-b',
  },
  {
    name: 'Diego Laguna',
    role: 'Analista de Soporte al Desarrollo',
    bio: 'Posee un amplio conocimiento en diversas tecnologías y siempre encuentra soluciones prácticas y efectivas para los retos técnicos.',
    gradient: 'grad-c',
  },
  {
    name: 'Marvin Mollo',
    role: 'Especialista de Herramientas de Desarrollo',
    bio: 'Destaca en la creación de sitios web con diseños atractivos y funcionales. Su creatividad convierte las ideas en experiencias digitales.',
    gradient: 'grad-d',
  },
  {
    name: 'Adrián Ordóñez',
    role: 'Desarrollador de Sistemas',
    bio: 'Se caracteriza por su eficiencia y capacidad de superar obstáculos. Para él, no existen impedimentos: siempre logra cumplir con las metas.',
    gradient: 'grad-e',
  },
]

export const values = [
  { title: 'Colaboración', text: 'Trabajamos juntos para alcanzar objetivos comunes.', icon: 'handshake' },
  { title: 'Innovación', text: 'Buscamos nuevas formas de resolver problemas.', icon: 'bulb' },
  { title: 'Responsabilidad', text: 'Cumplimos con nuestros compromisos académicos y técnicos.', icon: 'shield' },
  { title: 'Creatividad', text: 'Transformamos ideas en soluciones digitales.', icon: 'spark' },
]

export const techStack = [
  { label: 'Vue', group: 'Frontend' },
  { label: 'Angular', group: 'Frontend' },
  { label: 'Flask', group: 'Backend' },
  { label: 'Node.js', group: 'Backend' },
  { label: 'MongoDB', group: 'Datos' },
  { label: 'Supabase', group: 'Datos' },
  { label: 'Amazon RDS', group: 'Datos' },
  { label: 'GitHub', group: 'Repositorio' },
]

export const orgChart = {
  root: {
    role: 'Subgerente de Software',
    name: 'Adriana Álvarez (1)',
    link: 'https://drive.google.com/file/d/1jWa9guEWsy72vE70rKbb6hm8KwxetIIB/view?usp=drive_link',
    child: {
      role: 'Líder de Desarrollo',
      name: 'Adrián Gonzales (1)',
      link: 'https://drive.google.com/file/d/1crILrn1KiGaS_LF6ZxrTWpsG4UOoZs8n/view?usp=drive_link',
      children: [
        {
          role: 'Desarrollador de sistemas',
          name: 'Adrián Ordóñez (1)',
          link: 'https://drive.google.com/file/d/1gisE80f15eaedlM8UUKEG3p7mXKYucHo/view?usp=drive_link',
        },
        {
          role: 'Analista de soporte al desarrollo',
          name: 'Diego Laguna (1)',
          link: 'https://drive.google.com/file/d/1B2NdR2YHSFqOmw3x1yzIrktcKUEara-e/view?usp=drive_link',
        },
        {
          role: 'Especialista de herramientas de desarrollo',
          name: 'Marvin Mollo (1)',
          link: 'https://drive.google.com/file/d/10oEte44L4K132HbXNKwuDxPJABEAUwcR/view?usp=drive_link',
        },
      ],
    },
  },
  note: 'El área de software se encarga del diseño y desarrollo de sistemas que proporcionan soluciones tecnológicas.',
}

export const gestionIntroImage =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/CERN_control_room_computer_monitors.jpg/960px-CERN_control_room_computer_monitors.jpg'

export const gestionComponentes = [
  {
    title: 'Estrategia Tecnológica',
    text: 'Alinea las prioridades tecnológicas con la visión y los objetivos del negocio, definiendo metas claras y evaluando tecnologías emergentes para innovar.',
    icon: 'target',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Paris_-_Playing_chess_at_the_Jardins_du_Luxembourg_-_2966.jpg/960px-Paris_-_Playing_chess_at_the_Jardins_du_Luxembourg_-_2966.jpg',
  },
  {
    title: 'Infraestructura',
    text: 'Comprende el hardware, software, redes y centros de datos que sostienen la operación, gestionados con foco en seguridad, disponibilidad y eficiencia de costos.',
    icon: 'server',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/139_Server_Room_01.jpg/960px-139_Server_Room_01.jpg',
  },
  {
    title: 'Aplicaciones',
    text: 'Incluye el desarrollo, mantenimiento e integración de software, asegurando que los sistemas funcionen conectados, con buen rendimiento y seguridad.',
    icon: 'cube',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Laptop_coding_programs_%28Unsplash%29.jpg/960px-Laptop_coding_programs_%28Unsplash%29.jpg',
  },
  {
    title: 'Datos y talento',
    text: 'Abarca la recolección y análisis de datos para decisiones informadas (con calidad, seguridad y privacidad), junto con la capacitación y retención del talento humano clave para sostener la innovación.',
    icon: 'users',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Woman_writing_on_a_notebook_with_a_pen.jpg/960px-Woman_writing_on_a_notebook_with_a_pen.jpg',
  },
]

export const gestionProcesos = [
  {
    title: 'Gestión de proyectos',
    icon: 'chart',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Gantt_chart_example.png',
  },
  {
    title: 'Gestión de riesgos',
    icon: 'shield',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Life_Jackets_2451.jpg/960px-Life_Jackets_2451.jpg',
  },
  {
    title: 'Metodologías Ágiles',
    icon: 'rocket',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/CRS-9_mission_%2828348649546%29.jpg/960px-CRS-9_mission_%2828348649546%29.jpg',
  },
]

export const gestionHerramientas = [
  {
    title: 'Aplicaciones para gestionar proyectos',
    sub: 'Jira · Trello',
    icon: 'layers',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Dash_Coffee_at_Gate_1_Dasma_-_Interior_-_Post-it_notes_wall_2.jpg/960px-Dash_Coffee_at_Gate_1_Dasma_-_Interior_-_Post-it_notes_wall_2.jpg',
  },
  {
    title: 'Herramientas de Monitorización',
    sub: '',
    icon: 'chart',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Control_Room_of_the_Okeanos_Explorer_R337.jpg/960px-Control_Room_of_the_Okeanos_Explorer_R337.jpg',
  },
  {
    title: 'Plataformas de análisis de datos',
    sub: 'para la toma de decisiones',
    icon: 'database',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/AMD%4014nm%40GCN_5th_gen%40Vega10%40Radeon_RX_Vega_64%40ES-Sample%40_DSCx2_top-layer_closeup%4010x.jpg/960px-AMD%4014nm%40GCN_5th_gen%40Vega10%40Radeon_RX_Vega_64%40ES-Sample%40_DSCx2_top-layer_closeup%4010x.jpg',
  },
  {
    title: 'Seguridad, gestión de riesgos',
    sub: 'y protección',
    icon: 'shield',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Internet_Security_Padlock_for_VPN_%26_Online_Privacy.jpg/960px-Internet_Security_Padlock_for_VPN_%26_Online_Privacy.jpg',
  },
]

export const gestionBeneficios = [
  {
    title: 'Eficiencia operativa',
    text: 'Optimización del uso de recursos en el desarrollo de proyectos.',
    icon: 'gear',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Robot_arm_picks_up_cylindrical_objects_in_a_factory_setting.jpg/960px-Robot_arm_picks_up_cylindrical_objects_in_a_factory_setting.jpg',
  },
  {
    title: 'Decisiones mejoradas',
    text: 'Uso inteligente de datos para innovación continua.',
    icon: 'compass',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Reinhardtsgrimmaer_Heide%2C_Wegweiser_an_der_Landstrasse.jpg/960px-Reinhardtsgrimmaer_Heide%2C_Wegweiser_an_der_Landstrasse.jpg',
  },
  {
    title: 'Competitividad',
    text: 'Mejor satisfacción de los clientes frente a la competencia.',
    icon: 'award',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/141100_-_Athletics_track_finish_line_from_above_-_3b_-_2000_Sydney_race_photo.jpg/960px-141100_-_Athletics_track_finish_line_from_above_-_3b_-_2000_Sydney_race_photo.jpg',
  },
]

export const cienciaIntroImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Test_tubes_in_rack.jpg/960px-Test_tubes_in_rack.jpg'
export const tecnologiaIntroImage =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Intel_Underside_%2844256686%29.jpeg/960px-Intel_Underside_%2844256686%29.jpeg'
export const innovacionIntroImage =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Low-key_photograph_of_light_bulb%2C_Straume%2C_Norway_julesvernex2.jpg/960px-Low-key_photograph_of_light_bulb%2C_Straume%2C_Norway_julesvernex2.jpg'

export const metodoCientifico = [
  {
    title: 'Observación',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Microscope_eyepiece.jpg/960px-Microscope_eyepiece.jpg',
  },
  { title: 'Hipótesis', image: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Gluehlampe_01_KMJ.jpg' },
  {
    title: 'Experimentación',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Disposable_Pipette_Tips_in_Laboratory_Tip_Boxes_02.jpg/960px-Disposable_Pipette_Tips_in_Laboratory_Tip_Boxes_02.jpg',
  },
  {
    title: 'Conclusión',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Notebook-writing-man-book-person-blur-1176206.jpg/960px-Notebook-writing-man-book-person-blur-1176206.jpg',
  },
]

export const ramasCiencia = [
  {
    title: 'Ciencias Naturales',
    text: 'Conjunto de disciplinas que estudian la naturaleza, los seres vivos, la materia, la energía y los fenómenos del universo mediante el método científico.',
    icon: 'leaf',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Mountain_and_brook_draining_into_Firth_River%2C_Ivvavik_National_Park%2C_YT.jpg/960px-Mountain_and_brook_draining_into_Firth_River%2C_Ivvavik_National_Park%2C_YT.jpg',
  },
  {
    title: 'Sociales',
    text: 'Grupo de materias que estudian al ser humano, cómo vive en comunidad y la forma en que funcionan las sociedades.',
    icon: 'book',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Crowd_of_People_at_Ridge%2C_Shimla.jpg/960px-Crowd_of_People_at_Ridge%2C_Shimla.jpg',
  },
  {
    title: 'Formales',
    text: 'Disciplinas que estudian ideas abstractas, sistemas de signos y relaciones lógicas, como las matemáticas y la lógica, sin depender de la experimentación en el mundo real.',
    icon: 'atom',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Example_absolute_value.jpg/960px-Example_absolute_value.jpg',
  },
]

export const ejemplosCiencia = [
  {
    title: 'Teoría de la Relatividad',
    icon: 'atom',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Einstein_blackboard.jpg/960px-Einstein_blackboard.jpg',
  },
  {
    title: 'Descubrimiento del ADN',
    icon: 'dna',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/DNA_double_helix_%2813081113544%29.jpg',
  },
]

export const tiposTecnologia = [
  {
    title: 'Tecnología Dura',
    text: 'Conjunto de conocimientos, herramientas y maquinarias tangibles que se emplean para transformar materias primas y fabricar objetos o productos físicos.',
    icon: 'cube',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Circuit_board_with_protective_layer_ready_for_etching.jpg/960px-Circuit_board_with_protective_layer_ready_for_etching.jpg',
  },
  {
    title: 'Tecnología Blanda',
    text: 'Conjunto de conocimientos intangibles, métodos, habilidades y procesos organizativos o administrativos que sirven para mejorar el funcionamiento de grupos, empresas y sociedades.',
    icon: 'gear',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/NAVFAC_Pacific_Hosts_CIO_Cyber_Workshop_%2828325365239%29.jpg/960px-NAVFAC_Pacific_Hosts_CIO_Cyber_Workshop_%2828325365239%29.jpg',
  },
  {
    title: 'Tecnología de gestión',
    text: 'Conjunto de métodos, herramientas y procesos organizados que una empresa usa para planificar, coordinar y mejorar su trabajo de forma eficiente.',
    icon: 'layers',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/GanttPRO_Gantt_Chart_Software.png/960px-GanttPRO_Gantt_Chart_Software.png',
  },
]

export const procesosTecnologia = [
  {
    title: 'Diseño',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Engineering_drawings_of_the_VAL_256.jpg/960px-Engineering_drawings_of_the_VAL_256.jpg',
  },
  { title: 'Prototipado', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Imprimante_3D.jpg/960px-Imprimante_3D.jpg' },
  {
    title: 'Pruebas',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Quality_control_laboroatory_inside.jpg/960px-Quality_control_laboroatory_inside.jpg',
  },
  { title: 'Producción', image: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Industrial_robot.jpg' },
]

export const tiposInnovacion = [
  {
    title: 'Incremental',
    text: 'Pequeñas mejoras, actualizaciones o adiciones graduales a un producto, servicio o proceso que ya existe para hacerlo más eficiente o atractivo, sin cambiar su esencia.',
    icon: 'spark',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Adenium_seedling_2day_Uthandi_Aug21_D72_20609-21_ZP.jpg/960px-Adenium_seedling_2day_Uthandi_Aug21_D72_20609-21_ZP.jpg',
  },
  {
    title: 'Disruptiva',
    text: 'Producto, servicio o modelo de negocio accesible y diferente que transforma un mercado existente y desplaza a las empresas tradicionales.',
    icon: 'rocket',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Black_smartphone_in_hand_%28Unsplash%29.jpg/960px-Black_smartphone_in_hand_%28Unsplash%29.jpg',
  },
  {
    title: 'Radical',
    text: 'Producto, servicio o tecnología completamente nuevo que transforma por completo una industria o la forma en que vivimos y trabajamos.',
    icon: 'bulb',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/First_NASA_ISINGLASS_rocket_launch.jpg/960px-First_NASA_ISINGLASS_rocket_launch.jpg',
  },
]

export const procesosInnovacion = [
  {
    title: 'Ideación',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Whiteboard_mobile_app_reader_behavior.JPG/960px-Whiteboard_mobile_app_reader_behavior.JPG',
  },
  {
    title: 'Selección',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Capital_Area_Food_Bank_%2820160330-FNS-LSC-0044%29.jpg/960px-Capital_Area_Food_Bank_%2820160330-FNS-LSC-0044%29.jpg',
  },
  {
    title: 'Desarrollo',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/RustCodeOnScreen.jpg/960px-RustCodeOnScreen.jpg',
  },
  {
    title: 'Implementación',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Business_agreement_handshake_at_coffee_shop.jpg/960px-Business_agreement_handshake_at_coffee_shop.jpg',
  },
  {
    title: 'Difusión',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Optical_fiber_cable-01ASD.jpg/960px-Optical_fiber_cable-01ASD.jpg',
  },
]
