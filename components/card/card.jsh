<!-- Import a component -->

<component path = "%local/components/about" file = "about">

<!-- The pipe defines placeholders that will be changed for each instance -->

<pipe>
    <key name = "mydata" element = "about" index = "0">
    <foo name = "handleMe">
</pipe>

<!-- The JavaScript Code -->

<jsx>

    const handleMe = () =>
    {
        alert (`This is\n\n${mydata.title}\n${mydata.name}\n${mydata.email}`);
    };

</jsx>

<!-- Card component is using another component -->

<div class = "kpi-component-card">
    <about name = "Abduelaziz Kurt" title = "Full-Stack Developer" email = "abdkurt1982@gmail.com">
    <button onclick = "handleMe()">Click</button>
</div>

