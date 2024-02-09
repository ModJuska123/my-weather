import './Header.css';

export function Header() {
    return (
        <header class="main-header">
        <div class="logo">Orų prognozė</div>
        
        <form action="/action_page.php" className="date-set">
            <label for="birthday">Nuo kurios dienos:</label>
            <input type="date" id="diena" name="diena"/>
            <input type="submit" value="Submit"/>
        </form>

        <button id="add_task" class="btn">Pridėti</button>
    </header>
    );
}