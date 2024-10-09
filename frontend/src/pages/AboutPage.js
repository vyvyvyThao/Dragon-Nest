function AboutPage() {
    return (
        <div className="about-page"> {/* className included from origin/main */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <h1>ABOUT</h1> {/* Keep this heading from HEAD */}
            <br></br>
            <h2>Who we are</h2>
            <p> DragonNest was established in Spring, 2024 by a group of 4 Drexel College of Computing and Informatics 
                students, with a view to creating a student-friendly, transparent, interactive platform for Drexel students 
                to find housings for rent and roommates for unit sharing in the area of Philadelphia. </p>

            <br></br>
            <h2>What we do</h2>
            <p> DragonNest allows landlords to create accounts and post their houses for rent details, including housing 
                conditions, fees and contact information, following our required template to ensure the reliability.</p>
            <p> Future tenants can view information as guests (meaning no accounts needed) or create their user accounts to 
                save rooms and units they are interested in. Users can also write feedback on their experience living in or 
                working with the landlords of specific houses or units, which will be shown at the bottom of each unit’s 
                information page.</p>
            <p> A reddit-like feed is available for users to create posts introducing themselves, asking for room 
                recommendations and advice and looking for roommates. Updates or responses, such as changes in their saved 
                housing’s status, comments on posts will pop up while they are accessing the web and appear in their 
                notification section.</p>

            <br></br>
            <h2>Follow us</h2>
            {/* <a href="#" class="fa fa-instagram"><p>@dragonnest.philly</p></a> */}
            <a href="#" class="instagram-link">
                <i class="fa fa-instagram"></i>
                <p>@dragonnest.philly</p>
            </a>
        </div>
    );
}

export default AboutPage;
