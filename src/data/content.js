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
    positionId: 'subgerente-software',
    child: {
      role: 'Líder de Desarrollo',
      positionId: 'lider-desarrollo',
      children: [
        {
          role: 'Desarrollador de sistemas',
          positionId: 'desarrollador-sistemas',
        },
        {
          role: 'Analista de soporte al desarrollo',
          positionId: 'analista-soporte',
        },
        {
          role: 'Especialista de herramientas de desarrollo',
          positionId: 'especialista-herramientas',
        },
      ],
    },
  },
  note: 'El área de software se encarga del diseño y desarrollo de sistemas que proporcionan soluciones tecnológicas. Selecciona un cargo para ver su descripción de puesto completa.',
}

export const positions = [
  {
    id: 'subgerente-software',
    title: 'Subgerente de Software',
    meta: { categoria: 'Directivo', departamento: 'Software', titulares: 1, jornada: 'Tiempo completo' },
    finalidad: [
      'Dirigir el área de Software, definiendo lineamientos y prioridades para el diseño y desarrollo de sistemas.',
      'Asegurar que las soluciones tecnológicas entregadas respondan a las necesidades de la empresa.',
      'Supervisar la gestión de recursos humanos y materiales asignados al área.',
      'Alinear los proyectos de software con los objetivos estratégicos de la empresa.',
    ],
    eficiencia: [
      'Cumplimiento de los objetivos y proyectos del área de Software.',
      'Calidad y estabilidad de las soluciones tecnológicas entregadas.',
      'Gestión eficiente de los recursos humanos y materiales del área.',
      'Ajuste del desarrollo a los plazos y presupuesto asignados.',
    ],
    funciones: [
      'Definir los lineamientos y estándares de desarrollo del área.',
      'Supervisar y evaluar el desempeño del Líder de Desarrollo y su equipo.',
      'Aprobar la priorización de proyectos y asignación de recursos.',
      'Reportar los resultados del área a la Gerencia General.',
    ],
    relaciones: {
      jerarquicas: 'Reporta a la Gerencia General.',
      funcionales: 'Coordina con el Líder de Desarrollo y con otras áreas de la empresa.',
    },
    responsabilidad: [
      'Supervisión directa del presupuesto y los recursos asignados al área.',
      'Gestión de la confidencialidad de la información técnica y estratégica del área.',
      'Toma de decisiones críticas sobre prioridades y proyectos de software.',
    ],
    condiciones: [
      'Opera principalmente en entorno de oficina.',
      'Disponibilidad para reuniones y coordinación con otras áreas fuera del horario habitual.',
    ],
    riesgos: [
      'Estrés derivado de la responsabilidad sobre los resultados del área.',
      'Exposición a sobrecarga de trabajo en periodos de múltiples proyectos simultáneos.',
    ],
    requerimientos: [
      'Grado en Ingeniería de Sistemas, Informática o carreras afines.',
      'Experiencia mínima de 5 años en gestión de áreas o equipos de tecnología.',
      'Conocimientos en planificación estratégica y metodologías ágiles.',
      'Conocimiento de arquitectura de software y buenas prácticas de desarrollo.',
    ],
    competencias: [
      'Liderazgo y visión estratégica.',
      'Orientación a resultados.',
      'Habilidades de comunicación y negociación.',
      'Capacidad de toma de decisiones.',
    ],
    pdf: 'https://drive.google.com/file/d/1KoWJLAc3Sokf6uuSE2TcwUiOqI_1qB6f/view?usp=drive_link',
  },
  {
    id: 'lider-desarrollo',
    title: 'Líder de Desarrollo',
    meta: { categoria: 'Jefatura / Mando medio', departamento: 'Software', titulares: 1, jornada: 'Tiempo completo' },
    finalidad: [
      'Liderar y coordinar al equipo de desarrollo del área de Software.',
      'Traducir los lineamientos de la Subgerencia en tareas concretas para el equipo.',
      'Dar seguimiento al avance de los sistemas en desarrollo.',
      'Asegurar la calidad de las soluciones entregadas por el equipo.',
    ],
    eficiencia: [
      'Entrega de software funcional y de calidad en los plazos definidos.',
      'Coordinación efectiva del equipo de desarrollo, soporte y herramientas.',
      'Reducción de incidencias reportadas en los sistemas.',
      'Cumplimiento del presupuesto asignado a los proyectos del equipo.',
    ],
    funciones: [
      'Distribuir responsabilidades entre el desarrollador de sistemas, el analista de soporte y el especialista de herramientas.',
      'Supervisar el avance técnico de los proyectos del equipo.',
      'Analizar reportes de funcionamiento y proponer mejoras técnicas.',
      'Tomar decisiones ante imprevistos técnicos del equipo.',
    ],
    relaciones: {
      jerarquicas: 'Reporta a la Subgerente de Software.',
      funcionales: 'Coordina con el desarrollador de sistemas, el analista de soporte al desarrollo y el especialista de herramientas de desarrollo.',
    },
    responsabilidad: [
      'Supervisión del cumplimiento de los cronogramas de proyecto.',
      'Gestión de la calidad técnica de las soluciones entregadas por el equipo.',
      'Toma de decisiones críticas que afectan el funcionamiento de los sistemas del área.',
    ],
    condiciones: [
      'Opera principalmente en entorno de oficina con posibilidad de trabajo remoto.',
      'Disponibilidad para atender incidencias críticas fuera del horario habitual.',
    ],
    riesgos: [
      'Estrés derivado de la resolución de incidencias críticas en tiempo reducido.',
      'Sobrecarga de trabajo durante picos de demanda o entregas simultáneas.',
    ],
    requerimientos: [
      'Grado en Ingeniería de Sistemas, Informática o carreras afines.',
      'Experiencia mínima de 3 años en desarrollo de software y liderazgo de equipos.',
      'Conocimientos en metodologías ágiles y arquitectura de software.',
      'Conocimientos de control de versiones y buenas prácticas de desarrollo.',
    ],
    competencias: [
      'Liderazgo y gestión de equipos.',
      'Orientación a resultados y resolución de problemas.',
      'Habilidades de comunicación.',
      'Capacidad de análisis y mejora.',
    ],
    pdf: 'https://drive.google.com/file/d/1dWa6eD38E8kvd87SAWQAdia_FPE-3GNO/view?usp=drive_link',
  },
  {
    id: 'desarrollador-sistemas',
    title: 'Desarrollador de sistemas',
    meta: { categoria: 'Profesional / Técnico Especializado', departamento: 'Software', titulares: 1, jornada: 'Tiempo completo' },
    finalidad: [
      'Desarrollar y mantener los sistemas del área de Software.',
      'Implementar funcionalidades y corregir errores en los sistemas asignados.',
      'Participar en el diseño técnico de las soluciones del equipo.',
    ],
    eficiencia: [
      'Entrega de funcionalidades de software dentro de los plazos establecidos.',
      'Calidad y estabilidad del código entregado.',
      'Reducción de errores reportados en los sistemas desarrollados.',
    ],
    funciones: [
      'Programar e implementar las funcionalidades asignadas.',
      'Corregir errores e incidencias técnicas de los sistemas.',
      'Documentar el código y los cambios realizados.',
      'Colaborar con el analista de soporte en la resolución de incidencias.',
    ],
    relaciones: {
      jerarquicas: 'Reporta al Líder de Desarrollo.',
      funcionales: 'Coordina con el analista de soporte al desarrollo y el especialista de herramientas de desarrollo.',
    },
    responsabilidad: [
      'Responsabilidad sobre la calidad y el correcto funcionamiento del código entregado.',
      'Manejo de información técnica y datos de los sistemas.',
    ],
    condiciones: [
      'Opera principalmente en entorno de oficina, con posibilidad de trabajo remoto.',
      'Disponibilidad ocasional fuera de horario ante incidencias críticas.',
    ],
    riesgos: [
      'Fatiga visual y postural por trabajo prolongado frente al computador.',
      'Estrés por plazos ajustados de entrega.',
    ],
    requerimientos: [
      'Grado en Ingeniería de Sistemas, Informática o carreras afines.',
      'Conocimientos en lenguajes de programación (Java, Python, JavaScript u otros).',
      'Conocimientos en bases de datos y control de versiones.',
      'Conocimientos básicos de metodologías ágiles.',
    ],
    competencias: [
      'Pensamiento lógico y estructurado.',
      'Capacidad de análisis de problemas técnicos.',
      'Trabajo en equipo.',
      'Atención al detalle.',
    ],
    pdf: 'https://drive.google.com/file/d/1fvY4GvFtFdrpOgzYLzmABo9lu0Cyps8O/view?usp=drive_link',
  },
  {
    id: 'analista-soporte',
    title: 'Analista de soporte al desarrollo',
    meta: { categoria: 'Profesional', departamento: 'Software', titulares: 1, jornada: 'Tiempo completo' },
    finalidad: [
      'Brindar soporte técnico al equipo de desarrollo y a los sistemas del área.',
      'Atender y resolver incidencias reportadas por los usuarios.',
      'Colaborar en pruebas y validación de los sistemas en desarrollo.',
    ],
    eficiencia: [
      'Tiempo de resolución de incidencias reportadas.',
      'Calidad del soporte brindado al equipo y a los usuarios.',
      'Cobertura de pruebas realizadas sobre los sistemas.',
    ],
    funciones: [
      'Registrar y dar seguimiento a incidencias técnicas.',
      'Realizar pruebas funcionales de los sistemas en desarrollo.',
      'Coordinar con el desarrollador la resolución de errores detectados.',
      'Elaborar reportes de incidencias y soporte.',
    ],
    relaciones: {
      jerarquicas: 'Reporta al Líder de Desarrollo.',
      funcionales: 'Coordina con el desarrollador de sistemas y el especialista de herramientas de desarrollo.',
    },
    responsabilidad: [
      'Responsabilidad sobre el seguimiento y cierre oportuno de incidencias.',
      'Manejo de información y reportes de soporte del área.',
    ],
    condiciones: [
      'Opera principalmente en entorno de oficina, con atención a solicitudes de soporte.',
      'Disponibilidad ocasional fuera de horario ante incidencias críticas.',
    ],
    riesgos: [
      'Estrés por atención de incidencias críticas en tiempo reducido.',
      'Sobrecarga de trabajo en picos de solicitudes de soporte.',
    ],
    requerimientos: [
      'Grado en Ingeniería de Sistemas, Informática o carreras afines.',
      'Conocimientos en pruebas de software y gestión de incidencias.',
      'Conocimientos básicos de programación y bases de datos.',
      'Habilidad de comunicación con usuarios internos.',
    ],
    competencias: [
      'Orientación al servicio y resolución de problemas.',
      'Comunicación efectiva.',
      'Organización y seguimiento de tareas.',
      'Trabajo en equipo.',
    ],
    pdf: 'https://drive.google.com/file/d/1ExZl3mJXcaXFYN95y7oX9qiutkiVmTHs/view?usp=drive_link',
  },
  {
    id: 'especialista-herramientas',
    title: 'Especialista de herramientas de desarrollo',
    meta: { categoria: 'Profesional', departamento: 'Software', titulares: 1, jornada: 'Tiempo completo' },
    finalidad: [
      'Administrar y mantener las herramientas y el entorno de desarrollo del equipo.',
      'Asegurar la disponibilidad de los entornos de trabajo del equipo de desarrollo.',
      'Apoyar al equipo en la adopción de buenas prácticas de control de versiones e integración.',
    ],
    eficiencia: [
      'Disponibilidad y estabilidad de las herramientas de desarrollo.',
      'Adopción de buenas prácticas de control de versiones por el equipo.',
      'Tiempo de resolución de problemas de entorno de desarrollo.',
    ],
    funciones: [
      'Configurar y mantener las herramientas de control de versiones y entornos de prueba.',
      'Dar soporte al equipo en el uso de las herramientas de desarrollo.',
      'Evaluar e implementar mejoras en el entorno de trabajo del equipo.',
      'Documentar la configuración de las herramientas utilizadas.',
    ],
    relaciones: {
      jerarquicas: 'Reporta al Líder de Desarrollo.',
      funcionales: 'Coordina con el desarrollador de sistemas y el analista de soporte al desarrollo.',
    },
    responsabilidad: [
      'Responsabilidad sobre la disponibilidad de las herramientas y el entorno de desarrollo.',
      'Manejo de accesos y configuraciones del entorno de trabajo del equipo.',
    ],
    condiciones: [
      'Opera principalmente en entorno de oficina, con posibilidad de trabajo remoto.',
      'Disponibilidad ocasional fuera de horario ante fallas del entorno de desarrollo.',
    ],
    riesgos: [
      'Estrés ante fallas críticas del entorno de desarrollo.',
      'Sobrecarga de trabajo durante actualizaciones o migraciones de herramientas.',
    ],
    requerimientos: [
      'Grado en Ingeniería de Sistemas, Informática o carreras afines.',
      'Conocimientos en control de versiones y entornos de desarrollo.',
      'Conocimientos básicos de automatización y contenedores.',
      'Conocimientos generales de programación.',
    ],
    competencias: [
      'Pensamiento analítico y resolución de problemas técnicos.',
      'Organización y atención al detalle.',
      'Trabajo colaborativo con el equipo de desarrollo.',
      'Proactividad para la mejora continua de herramientas.',
    ],
    pdf: 'https://drive.google.com/file/d/11LoZqZijirAlELznk1oiJTOlPE19zmXM/view?usp=drive_link',
  },
]

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

export const scrumCaracteristicas = [
  {
    title: 'Iterativo e incremental',
    text: 'El trabajo se entrega en ciclos cortos llamados sprints, construyendo el producto poco a poco en versiones funcionales.',
    icon: 'cycle',
  },
  {
    title: 'Adaptable',
    text: 'Se ajusta con facilidad a cambios de prioridades, requerimientos o condiciones del proyecto entre un sprint y otro.',
    icon: 'compass',
  },
  {
    title: 'Colaborativo',
    text: 'El equipo trabaja de forma conjunta y autoorganizada, tomando decisiones técnicas sin depender de una jerarquía rígida.',
    icon: 'handshake',
  },
  {
    title: 'Transparente',
    text: 'El progreso, los obstáculos y los resultados del trabajo son visibles para todo el equipo y los interesados.',
    icon: 'chart',
  },
  {
    title: 'Basado en el valor',
    text: 'Prioriza primero lo que aporta mayor valor al negocio y a las personas usuarias del producto.',
    icon: 'award',
  },
  {
    title: 'Empírico',
    text: 'Se apoya en la inspección y la adaptación constantes, aprendiendo de la experiencia real en cada sprint.',
    icon: 'flask',
  },
]

export const scrumEventos = [
  {
    title: 'Sprint Planning',
    text: 'El equipo define qué elementos del backlog se trabajarán durante el sprint y cómo se lograrán.',
    icon: 'target',
  },
  {
    title: 'Daily Scrum',
    text: 'Reunión diaria y breve (15 minutos) para sincronizar avances, planes del día y posibles obstáculos.',
    icon: 'calendar',
  },
  {
    title: 'Sprint Review',
    text: 'Se presenta el incremento terminado a los interesados y se recoge retroalimentación sobre el producto.',
    icon: 'chart',
  },
  {
    title: 'Sprint Retrospective',
    text: 'El equipo reflexiona sobre cómo trabajó durante el sprint y define mejoras para el siguiente ciclo.',
    icon: 'spark',
  },
]

export const scrumRoles = [
  {
    title: 'Product Owner',
    text: 'Define y prioriza el Product Backlog, representando la voz del negocio y de las personas usuarias.',
    icon: 'compass',
  },
  {
    title: 'Scrum Master',
    text: 'Facilita el proceso, elimina obstáculos del equipo y asegura que se sigan los principios y valores de Scrum.',
    icon: 'shield',
  },
  {
    title: 'Equipo de Desarrollo',
    text: 'Grupo autoorganizado y multidisciplinario que construye el incremento del producto en cada sprint.',
    icon: 'users',
  },
]

export const scrumArtefactos = [
  {
    title: 'Product Backlog',
    text: 'Lista ordenada y viva de todo lo que podría necesitar el producto: funcionalidades, mejoras y correcciones.',
    icon: 'book',
  },
  {
    title: 'Sprint Backlog',
    text: 'Conjunto de elementos del Product Backlog seleccionados para el sprint actual, más el plan para entregarlos.',
    icon: 'layers',
  },
  {
    title: 'Incremento',
    text: 'Suma de todo el trabajo terminado durante el sprint, en un estado utilizable y listo para inspección.',
    icon: 'check',
  },
]

export const mbtiDimensiones = [
  {
    title: 'Energía',
    poles: 'Extravertido (E) ↔ Introvertido (I)',
    text: 'De dónde obtiene energía la persona: del mundo exterior, la acción y la interacción social, o de su mundo interior, las ideas y la reflexión a solas.',
    icon: 'users',
  },
  {
    title: 'Mente',
    poles: 'Intuitivo (N) ↔ Observador (S)',
    text: 'Cómo procesa la información: enfocándose en posibilidades, patrones e ideas abstractas, o en hechos concretos y la experiencia práctica.',
    icon: 'bulb',
  },
  {
    title: 'Naturaleza',
    poles: 'Pensamiento (T) ↔ Sentimiento (F)',
    text: 'Cómo toma decisiones: guiándose por la lógica y el análisis objetivo, o considerando los valores y el impacto en las personas.',
    icon: 'handshake',
  },
  {
    title: 'Tácticas',
    poles: 'Juicio (J) ↔ Percepción (P)',
    text: 'Cómo se organiza frente al mundo: con planificación, estructura y decisiones firmes, o con flexibilidad, espontaneidad y opciones abiertas.',
    icon: 'layers',
  },
  {
    title: 'Identidad',
    poles: 'Asertivo (A) ↔ Turbulento (T)',
    text: 'Qué tan segura se siente la persona de sus decisiones: con confianza y calma bajo presión, o con mayor autoexigencia y sensibilidad al estrés.',
    icon: 'shield',
  },
]

export const mbtiResultados = [
  {
    name: 'Marvin Mollo',
    role: 'Subgerente de Software',
    positionId: 'subgerente-software',
    type: 'ENTJ-A',
    nickname: 'Comandante',
    image: 'https://www.16personalities.com/static/animations/type-descriptions/introductions/commander.svg?v=2',
    description:
      'Líder natural, decidido y estratégico, que se enfoca en mejorar procesos y alcanzar metas ambiciosas. Es organizado, seguro de sí mismo y impulsa la eficiencia en todo lo que emprende.',
    objetivo: 'Consolidar una gestión estratégica del área de Software, alineando cada proyecto con los objetivos de la empresa y garantizando el cumplimiento de plazos, presupuesto y calidad.',
  },
  {
    name: 'Adrián Ordóñez',
    role: 'Líder de Desarrollo',
    positionId: 'lider-desarrollo',
    type: 'INTJ-A',
    nickname: 'Arquitecto',
    image: 'https://www.16personalities.com/static/animations/type-descriptions/introductions/architect.svg?v=2',
    description:
      'Pensador estratégico e imaginativo, con un plan para todo. Es analítico, independiente y disfruta diseñando soluciones complejas y eficientes a partir de la lógica y la mejora continua.',
    objetivo: 'Fortalecer la calidad técnica del equipo de desarrollo, estableciendo estándares claros de arquitectura y buenas prácticas que reduzcan errores e incidencias en los sistemas.',
  },
  {
    name: 'Adrián Gonzales',
    role: 'Desarrollador de Sistemas',
    positionId: 'desarrollador-sistemas',
    type: 'ISTP-T',
    nickname: 'Virtuoso',
    image: 'https://www.16personalities.com/static/animations/type-descriptions/introductions/virtuoso.svg?v=2',
    description:
      'Explorador práctico que disfruta de los retos técnicos y de entender cómo funcionan las cosas por dentro. Resuelve problemas de forma directa, trabaja bien de manera independiente y se adapta con rapidez a los imprevistos.',
    objetivo: 'Entregar funcionalidades estables y bien probadas en cada sprint, resolviendo con rapidez los errores técnicos que surjan durante el desarrollo de los sistemas.',
  },
  {
    name: 'Diego Laguna',
    role: 'Analista de Soporte al Desarrollo',
    positionId: 'analista-soporte',
    type: 'ENFP-T',
    nickname: 'Activista',
    image: 'https://www.16personalities.com/static/animations/type-descriptions/introductions/campaigner.svg?v=2',
    description:
      'Espíritu libre, entusiasta y sociable que conecta con facilidad con las personas. Combina creatividad, empatía y energía positiva, y encuentra satisfacción en ayudar a resolver los problemas de los demás.',
    objetivo: 'Reducir el tiempo de resolución de incidencias y mejorar la experiencia de soporte, fortaleciendo la comunicación entre los usuarios y el equipo de desarrollo.',
  },
  {
    name: 'Adriana Álvarez',
    role: 'Especialista de Herramientas de Desarrollo',
    positionId: 'especialista-herramientas',
    type: 'ISFJ-T',
    nickname: 'Defensora',
    image: 'https://www.16personalities.com/static/animations/type-descriptions/introductions/defender.svg?v=2',
    description:
      'Personalidad cálida y responsable que ofrece apoyo constante y cuidado práctico a quienes la rodean. Destaca por su atención al detalle, su memoria para lo importante y su compromiso con crear estabilidad y confort para su equipo.',
    objetivo: 'Mantener un entorno de desarrollo estable, seguro y bien documentado, asegurando que el equipo cuente siempre con las herramientas adecuadas para trabajar sin interrupciones.',
  },
]
