---
title: Requisitos de Módulos
---

Con el fin de comprender mejor el funcionamiento del SSGE, el mismo debe ser una estructura distribuida
en módulos especializados que se relacionen entre sí y con sistemas ya existentes y en operación en la
ENTIDAD, además cada módulo estará constituido por submódulos con una funcionalidad o característica
definida.

Los requisitos generales mínimos para los módulos de software del SSGE son los siguientes:

<details>
<summary>a) Asignación de Tareas</summary>

- [ ] **a)** Proveer herramientas personalizables para el uso por parte de los responsables del SSGE en la ENTIDAD, en lo que se refiere a la asignación de tareas dentro de los procesos. Estas herramientas deben ser capaces de generar pantallas de trabajo con campos definidos, procesos de consulta y registro de información, reglas de almacenamiento y procesamiento, creación de sub módulos definidos por las actividades, automatización de tareas como ser la validación gerencial, envío de correos electrónicos, generación de documentos de manera similar al sistema de correo directo, e inclusión, exclusión y alteración de submódulo dentro de un mismo flujo de trabajo conforme a las peculiaridades de cada servicio. El SSGE debe contar con controles y seguimiento de procesos.
</details>

<details>
<summary>b) Herramientas de Ingeniería</summary>

- [ ] Implementar los flujos correspondientes al uso de la herramienta de ingeniería dentro de los flujos de la ENTIDAD, como ser determinación de interferencias, análisis de disponibilidad, cálculo y simulación de cobertura, gestión del espectro en base al Plan Nacional de Frecuencias.
</details>

<details>
<summary>c) Visualización del Plan Nacional de Frecuencias</summary>

- [ ] Visualización del Plan Nacional de Frecuencias y la identificación de cada banda del espectro. Con el fin de facilitar la visualización, el gráfico deberá discriminar por colores cada segmento según su atribución, canalización, tipo de servicio, área de cobertura facilitando el acceso a la banda seleccionada. La herramienta debe proporcionar información sobre el estado de disponibilidad de recursos de espectro.
</details>

<details>
<summary>d) Configuración de Servicios del PNF</summary>

- [ ] **d)** Contar con una interfaz para la configuración del Plan Nacional de Frecuencias, de acuerdo a los servicios regulados por la ENTIDAD. La identificación del servicio es vital para la organización de toda la estructura del SSGE en términos de definición de perfil de uso del operador, reglas de análisis técnico para cada servicio, tipo de sistema de canalización (simplex y dúplex) y gestión de información sobre los mapas e informes obtenidos con los resultados del procesamiento de los análisis técnicos. La división de los servicios en grandes grupos tiene como objetivo la administración de la estructura del SSGE, asignando reglas generales por grupo y específicas por servicio.
</details>

<details>
<summary>e) CRUD de Servicios</summary>

- [ ] **e)** Proveer herramientas para la inclusión, exclusión y actualización de los servicios, mediante la edición o creación del grupo correspondiente al servicio.
</details>

<details>
<summary>f) Visualización de atribuciones</summary>

- [ ] **f)** Visualizar los cuadros de atribución de bandas de frecuencias del Estado Plurinacional de Bolivia y sus notas nacionales, así como los de países limítrofes, además de los cuadros de atribución definidos por la UIT para la Región 2.
</details>

<details>
<summary>g) Modificar el Plan Nacional de Frecuencias</summary>

- [ ] **g)** Actualizar, crear, modificar y eliminar las bandas de frecuencia por tipo de servicio, área de cobertura y otros parámetros, actualizando los cambios en la base de datos del Plan Nacional de Frecuencias del Estado Plurinacional de Bolivia. Permitir actualizar las Notas y/o recomendaciones (UIT y Nacional) y contar con la capacidad de crear, modificar y excluir las Notas. Además, actualizar las atribuciones de frecuencia y los planes de canalización del Plan Nacional de Frecuencias. El SSGE debe contar con la capacidad de visualizar e imprimir el cuadro de atribución de frecuencias del Estado Plurinacional de Bolivia.
</details>

<details>
<summary>h) Áreas de Cobertura</summary>

- [ ] **h)** Proveer información sobre las áreas de cobertura de los servicios públicos definidos en la normativa vigente, en mapas georreferenciados. La información debe complementarse con datos sobre los operadores, tipo de tecnología, bandas de frecuencia utilizada, nivel de intensidad de campo y capacidad de tráfico (con la información proporcionada de cantidad de usuarios y ancho de banda) en función de la ubicación indicada en el mapa.
</details>

<details>
<summary>i) Consulta del Espectro</summary>

- [ ] **i)** Permitir la consulta considerando aspectos socioeconómicos y de uso eficiente del espectro. El SSGE debe proveer herramientas para la visualización de los resultados de la consulta en mapas georreferenciados del territorio boliviano, considerando como unidad mínima de búsqueda los límites geográficos de los municipios existentes en el Estado Plurinacional de Bolivia, para cada rango de frecuencias evaluadas y separando los resultados por servicio y/o Operador.
</details>

<details>
<summary>j) DAF-DUF</summary>

- [ ] **j)** Capacidad de gestión de para el establecimiento y registro de los cálculos correspondientes al uso y asignación de frecuencias (DAF – DUF), así como el cálculo de los devengados de las obligaciones económicas respectivas por cada gestión.
</details>

<details>
<summary>k) Cobros</summary>

- [ ] **k)** La gestión de cobro debe ser capaz de interoperar con el sistema de cobranzas de la ENTIDAD, haciendo disponible la información de obligaciones económicas de los operadores.
</details>

<details>
<summary>l) DAF-DUF</summary>

- [ ] **l)** Realizar los cálculos y almacenar el registro de las memorias de cálculo de montos económicos por conceptos de derechos de asignación y uso de frecuencias en el proceso de otorgamiento de licencias pagos anuales de las licencias de operadores que hacen uso de frecuencias del espectro radioeléctrico.
</details>

<details>
<summary>m) Roles y Permisos</summary>

- [ ] **m)** El acceso a cada uno de los módulos y funcionalidades para determinado usuario, dependerá de su perfil.
</details>

<details>
<summary>n) Integración</summary>

- [ ] **n)** Integrarse e interactuar sin dificultades con sistemas de información existentes, que formen parte del flujo de trabajo de la ENTIDAD.
</details>

<details>
<summary>o) Módulos versátiles</summary>

- [ ] **o)** Las reglas de relación entre los diversos sub módulos del sistema deben permitir operaciones de prueba, validación, alertas, creación, inclusión y exclusión de sub módulos preestablecidos.
</details>

<details>
<summary>p) Admin Rol</summary>

- [ ] **p)** La administración de todos los módulos del SSGE debe estar completamente a cargo de usuarios administradores de la ENTIDAD.
</details>

<details>
<summary>q) Programar órdenes de pago</summary>

- [ ] **q)** El SSGE deberá permitir la configuración de tareas programadas que generen de manera automática las órdenes de pago de los cobros correspondientes a los servicios.
</details>