import './Main.css';

export function Main() {
    return (
        <main class="main-content">
            <h1>Lietuvos orų žemėlapis</h1>
            <p class="map"><iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1540236.6958922145!2d23.893797589155398!3d55.15097667448778!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slt!4v1707432577560!5m2!1sen!2slt" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
        <>
        <script>
        function addMarker(location) {
        marker = new google.maps.Marker({
            position: location,
            map: map
        })
    }
        </script>
        </>
        </main>
    );
}
