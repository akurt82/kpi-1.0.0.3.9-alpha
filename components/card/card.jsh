<!-- Import a component -->

<component path = "%local/components/about" file = "about">

<!-- The pipe defines placeholders that will be changed for each instance -->

<pipe>
    <key name = "mydata" element = "about" index = "0">
    <foo name = "handleMe">
</pipe>

<!-- The JavaScript Code -->

<jsx>

    function handleMe ()
    {
        alert (`This is\n\n${mydata.title}\n${mydata.name}\n${mydata.email}`);
    }

</jsx>

<!-- Card component is using another component -->

<div class = "kpi-component-card">
    <about * = "mydata" name = "%sname, %fname" title = "%topic" email = "%mail">
    <button onclick = "handleMe()">Click</button>
</div>
