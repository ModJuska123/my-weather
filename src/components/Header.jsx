import './Header.css';

export function Header() {
    return (
        <header className="main-header">
            <div className="logo">Orų prognozė</div>
            <div className="weather_data">
                <form action="/action_page.php" className="date-set">
                    <label for="data">Pasirinkti dieną: </label>
                    <input type="date" id="weatherDate" name="weatherDate" />
                    <button class="button3">Įvesti</button>
                </form>
            </div>
            <div>
                <div class="topnav">
                    <a href="#temperature">Temperatūra</a>
                    <a href="#humidity">Drėgmė</a>
                    <a href="#vindSpeed">Vėjo greitis</a>
                </div>
            </div>
        </header>
    );
}