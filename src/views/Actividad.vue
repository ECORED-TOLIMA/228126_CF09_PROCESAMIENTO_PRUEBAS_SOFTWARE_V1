<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Desafío integral: diseño, desarrollo y calidad de aplicaciones <em>web</em>',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar y afianzar conocimientos relacionados con el diseño, desarrollo y calidad de aplicaciones <em>web</em>, teniendo en cuenta los principios, técnicas, procedimientos y criterios aplicables en su construcción y validación.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito fundamental del aseguramiento de la calidad (Quality Assurance - QA) en el desarrollo de <em>software?</em>',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Corregir únicamente los errores sintácticos reportados por los usuarios en producción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Evaluar y afianzar conocimientos sobre el diseño, desarrollo, construcción y validación de aplicaciones <em>web</em>.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituir la fase de diseño técnico mediante pruebas automatizadas masivas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Escribir el código fuente de la aplicación en el menor tiempo posible.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los conceptos relacionados con el diseño, desarrollo y calidad de aplicaciones 𝘸𝘦𝘣.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Qué nivel de prueba se enfoca en verificar de forma aislada la lógica interna de funciones, métodos o módulos individuales del código fuente?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Pruebas de aceptación del usuario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pruebas de integración.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Pruebas unitarias.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Pruebas de estrés.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los conceptos relacionados con el diseño, desarrollo y calidad de aplicaciones web.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es la función principal de la "definición de listo" (Definition of Ready - DoR) en un marco ágil como Scrum?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Autorizar el despliegue automático del código a producción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Verificar que la historia de usuario cumpla los criterios y condiciones necesarios para iniciar el <em>sprint</em>.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Evaluar la interfaz visual final de la aplicación con el cliente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Finalizar la fase de pruebas de penetración (<em>penetration testing</em>).',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los conceptos relacionados con el diseño, desarrollo y calidad de aplicaciones web.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'Si el equipo de desarrollo necesita comprobar el comportamiento del sistema ante un volumen extremo de peticiones concurrentes para identificar su punto de ruptura, ¿qué tipo de prueba debe aplicar?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Prueba de usabilidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Prueba de regresión.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Prueba de carga y estrés (<em>performance / stress testing</em>).',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Prueba unitaria.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los conceptos relacionados con el diseño, desarrollo y calidad de aplicaciones web.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Qué diferencia a un <em>mockup</em> de un <em>wireframe</em> en el proceso de prototipado de aplicaciones?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El <em>wireframe</em> incluye imágenes reales y colores finales, mientras que el <em>mockup</em> es solo a mano alzada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El <em>mockup</em> contiene toda la lógica de <em>backend</em> programada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El <em>wireframe</em> representa la estructura básica de baja fidelidad, mientras que el <em>mockup</em> aporta alta fidelidad gráfica.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'No existe diferencia; ambos términos significan exactamente lo mismo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los conceptos relacionados con el diseño, desarrollo y calidad de aplicaciones web.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Qué recurso de prototipado conecta múltiples esquemas de pantalla mediante vectores o líneas de flujo para representar los caminos de navegación del usuario?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diagrama entidad-relación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mapa de empatía.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '<em>Wireflow.</em>',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '<em>Sketch</em> a lápiz.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los conceptos relacionados con el diseño, desarrollo y calidad de aplicaciones web.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            'En el ciclo de vida del desarrollo de <em>software</em> (SDLC), ¿qué caracteriza al modelo en cascada (<em>waterfall</em>)?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Su ejecución se desarrolla de forma iterativa e incremental, con entregas frecuentes durante el proyecto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Los requerimientos pueden modificarse en cualquier etapa sin afectar la planificación ni los costos del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El desarrollo avanza sin requerir documentación ni una definición previa de los requerimientos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Cada fase debe completarse secuencialmente antes de iniciar la siguiente.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los conceptos relacionados con el diseño, desarrollo y calidad de aplicaciones web.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es el marco ágil de trabajo basado en la gestión visual del flujo de tareas mediante un tablero con columnas de estado (Por hacer, En proceso, Hecho)?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'COBIT.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'ITIL.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Kanban.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cascada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los conceptos relacionados con el diseño, desarrollo y calidad de aplicaciones web.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Qué documento formal especifica el alcance, estrategia, recursos, entorno y cronograma de las actividades de prueba de un proyecto de <em>software</em>?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Plan de Pruebas (<em>test plan</em>).',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Historial de <em>commits</em> de Git.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Manual de usuario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Diagrama de despliegue.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los conceptos relacionados con el diseño, desarrollo y calidad de aplicaciones web.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            'En el desarrollo <em>frontend</em> moderno, ¿cuál es la función de la etiqueta semántica HTML5 <main>?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Alojar exclusivamente los botones del menú de navegación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Contener el contenido principal del documento.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Enlazar hojas de estilo externas CSS.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cargar fragmentos de scripts de servidor PHP.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los conceptos relacionados con el diseño, desarrollo y calidad de aplicaciones web.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Qué formato de imagen moderno es altamente recomendado para la <em>web</em> por ofrecer altos niveles de compresión con y sin pérdida, manteniendo excelente calidad visual?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'WebP.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'TIFF.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'BMP.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'PCX.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los conceptos relacionados con el diseño, desarrollo y calidad de aplicaciones web.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Qué tipo de licencia Creative Commons permite el uso, modificación y distribución de una obra, siempre y cuando se reconozca la autoría original y no se utilice con fines comerciales?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'CC BY-SA.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Copyright reserva total.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'CC0.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'CC BY-NC.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los conceptos relacionados con el diseño, desarrollo y calidad de aplicaciones web.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Cuál es una función de la estructuración semántica mediante etiquetas HTML5 en el contenido <em>web</em>?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Facilitar la interpretación del contenido por tecnologías de asistencia y <em>crawlers</em> de búsqueda.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Cifrar automáticamente la información almacenada en una base de datos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir las hojas de estilo CSS utilizadas en la presentación visual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Administrar las conexiones entre el servidor y la base de datos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los conceptos relacionados con el diseño, desarrollo y calidad de aplicaciones web.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Qué protocolo garantiza que la información transmitida entre el navegador <em>web</em> del usuario y el servidor viaje cifrada mediante TLS/SSL?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'HTTP.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'FTP.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'HTTPS.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Telnet.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los conceptos relacionados con el diseño, desarrollo y calidad de aplicaciones web.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            'Según el proyecto OWASP, ¿en qué consiste la vulnerabilidad de "inyección SQL"?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'En la pérdida del estilo visual cuando falla la carga del archivo CSS.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'En la inserción de comandos SQL maliciosos mediante campos de entrada no validados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'En el consumo excesivo de memoria RAM en la máquina del cliente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'En el envío duplicado de correos electrónicos desde un formulario de contacto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los conceptos relacionados con el diseño, desarrollo y calidad de aplicaciones web.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            'En la maquetación <em>web</em>, ¿qué técnica se basa en el uso de Media Queries de CSS para adaptar el <em>layout</em> según la resolución del dispositivo?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Diseño <em>web</em> responsivo (<em>responsive web design</em>).',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Programación estructurada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Renderizado del lado del servidor (SSR).',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Renderizado en texto plano.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los conceptos relacionados con el diseño, desarrollo y calidad de aplicaciones web.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Qué relación de contraste de color exige como mínimo el estándar WCAG 2.1 (Nivel AA) para textos normales en una interfaz accesible?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '1.5:1',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '2.0:1',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '4.5:1',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '10:1',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los conceptos relacionados con el diseño, desarrollo y calidad de aplicaciones web.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Qué significa la "definición de hecho" (Definition of Done - DoD) para un equipo de desarrollo de <em>software</em>?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El presupuesto total utilizado para desarrollar y completar las actividades previstas durante la fase de análisis.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Los criterios técnicos y de calidad que debe cumplir un elemento para considerarse terminado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El contrato formal aprobado y firmado por el cliente antes de comenzar las actividades de desarrollo del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La fecha establecida para que el equipo de desarrollo finalice sus actividades antes de iniciar un periodo de descanso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los conceptos relacionados con el diseño, desarrollo y calidad de aplicaciones web.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Cuál de los siguientes enunciados representa un criterio de aceptación bien redactado para un módulo de autenticación?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La pantalla debe ser bonita y moderna.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Dado un usuario con credenciales válidas, cuando inicia sesión, entonces accede al panel principal.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El sistema de autenticación debe utilizar una base de datos rápida que permita mejorar el rendimiento general de la aplicación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El módulo de autenticación debe quedar terminado el viernes para cumplir con el cronograma establecido por el equipo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los conceptos relacionados con el diseño, desarrollo y calidad de aplicaciones web.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            'En el ámbito de las bases de datos para contenido <em>web</em>, ¿cuál es la función de un sistema de gestión de bases de datos relacionales (RDBMS) como MySQL o PostgreSQL?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Almacenar, organizar y consultar datos mediante tablas y relaciones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Renderizar etiquetas HTML en el navegador.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Diseñar logotipos e iconografía vectorial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Probar el tiempo de respuesta del procesador.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia una adecuada comprensión de los conceptos relacionados con el diseño, desarrollo y calidad de aplicaciones web.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
