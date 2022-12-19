<nav>
    <route text = "Homepage" goto = "/">
    <route text = "Information" goto = "/info">
    <route text = "Contact Me :-)" goto = "/contact">
</nav>

<main class = "%myclass">

    <p id = "welc">
    <label>Welcome to Contact-Page</label>
    </p>

    <jsx>

        if ( #welc )
        {
            #welc.style.backgroundColor = 'RGB( 220, 220, 220 )';
            #welc.style.padding = '10px';
        }

        if ( #label[0] )
        {
            #label[0].style.backgroundColor = 'RGB( 200, 200, 200 )';
            #label[0].style.color = 'blue';
        }

        if ( #main[0] )
        {
            #main[0].innerHTML += {%

            <style>

                .contact-items
                {
                    margin: 20px 0;
                }

                .contact-items div
                {
                    width: 25%;
                    margin: 6px;
                    padding: 6px;
                    cursor: pointer;
                    line-height: 30px;
                    text-align: center;
                    background-color: rgb( 230, 235, 240 );
                }

                .contact-items div:hover
                {
                    background-color: rgb( 220, 225, 235 );
                    box-shadow: 4px 4px 4px rgba( 0, 0, 0, 0.08 );
                }

            </style>

            <div style = "display: flex;" class = "contact-items">

                <div>
                    Palo Alto
                </div>

                <div>
                    Cupertino
                </div>

                <div>
                    Menlo Park
                </div>

                <div>
                    Redmond
                </div>

            </div>

            %};
        }

    </jsx>

</main>