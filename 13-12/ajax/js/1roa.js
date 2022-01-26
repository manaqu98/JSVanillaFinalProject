$("#tabla").prepend(
    `<table class="tg">
        <thead>
            <tr>
                <th class="tg-4btj">#</th>
                <th class="tg-4btj">Nombre</th>
                <th class="tg-4btj">Apellido</th>
                <th class="tg-4btj">Nota 1</input></th>
                <th class="tg-4btj">Nota 2</input></th>
                <th class="tg-4btj">Nota 3</input></th>
                <th class="tg-4btj">Promedio</th>
                </tr>
        </thead>
        <tbody>
            <tr>
                <th class="tg-4btj">1</th>
                <th class="tg-4btj">Matias</th>
                <th class="tg-4btj">Quarchioni</th>
                <th class="tg-4btj"><input type="number" step="0.25" min="1" max="10" maxlength="3" id="nota1.1"></input></th>
                <th class="tg-4btj"><input type="number" step="0.25" min="1" max="10" maxlength="3" id="nota1.2"></input></th>
                <th class="tg-4btj"><input type="number" step="0.25" min="1" max="10" maxlength="3" id="nota1.3"></input></th>
                <th class="tg-4btj"><input id="promedio1" type="number" maxlenght="3" min="1" max="10"></th>
                </tr>
            <tr>
                <td class="tg-4btj">2</td>
                <td class="tg-4btj">Federico</td>
                <td class="tg-4btj">Pedrozo</td>
                <td class="tg-4btj"><input type="number" step="0.25" min="1" max="10" maxlength="3" id="nota2.1"></input></td>
                <td class="tg-4btj"><input type="number" step="0.25" min="1" max="10" maxlength="3" id="nota2.2"></input></td>
                <td class="tg-4btj"><input type="number" step="0.25" min="1" max="10" maxlength="3" id="nota2.3"></input></td>
                <td class="tg-4btj"><input id="promedio2" type="number" maxlenght="3" min="1" max="10"></td>
            </tr>
            <tr>
                <td class="tg-4btj">3</td>
                <td class="tg-4btj">Ingrid</td>
                <td class="tg-4btj">Gutierrez</td>
                <td class="tg-4btj"><input type="number" step="0.25" min="1" max="10" maxlength="3" id="nota3.1"></input></td>
                <td class="tg-4btj"><input type="number" step="0.25" min="1" max="10" maxlength="3" id="nota3.2"></input></td>
                <td class="tg-4btj"><input type="number" step="0.25" min="1" max="10" maxlength="3" id="nota3.3"></input></td>
                <td class="tg-4btj"><input id="promedio3" type="number" maxlenght="3" min="1" max="10"></td>
            </tr>
            <tr>
                <td class="tg-4btj">4</td>
                <td class="tg-4btj">Josefat</td>
                <td class="tg-4btj">Ismael</td>
                <td class="tg-4btj"><input type="number" step="0.25" min="1" max="10" maxlength="3" id="nota4.1"></input></td>
                <td class="tg-4btj"><input type="number" step="0.25" min="1" max="10" maxlength="3" id="nota4.2"></input></td>
                <td class="tg-4btj"><input type="number" step="0.25" min="1" max="10" maxlength="3" id="nota4.3"></input></td>
                <td class="tg-4btj"><input id="promedio4" type="number" maxlenght="3" min="1" max="10"></td>
            </tr>
            <tr>
                <td class="tg-4btj">5</td>
                <td class="tg-4btj">Carlos</td>
                <td class="tg-4btj">Ramos Mejia</td>
                <td class="tg-4btj"><input type="number" step="0.25" min="1" max="10" maxlength="3" id="nota5.1"></input></td>
                <td class="tg-4btj"><input type="number" step="0.25" min="1" max="10" maxlength="3" id="nota5.2"></input></td>
                <td class="tg-4btj"><input type="number" step="0.25" min="1" max="10" maxlength="3" id="nota5.3"></input></td>
                <td class="tg-4btj"><input id="promedio5" type="number" maxlenght="3" min="1" max="10"></td>
            </tr>
        </tbody>
        </table>`);

document.getElementById("botonpromedio").addEventListener("click", promediar)

function promediar(){

    let nota1_1 = document.getElementById("nota1.1").value;
    let nota1_2 = document.getElementById("nota1.2").value;
    let nota1_3 = document.getElementById("nota1.3").value;

    let nota2_1 = document.getElementById("nota2.3").value;
    let nota2_2 = document.getElementById("nota2.3").value;
    let nota2_3 = document.getElementById("nota2.3").value;

    let nota3_1 = document.getElementById("nota3.1").value;
    let nota3_2 = document.getElementById("nota3.2").value;
    let nota3_3 = document.getElementById("nota3.3").value;

    let nota4_1 = document.getElementById("nota4.1").value;
    let nota4_2 = document.getElementById("nota4.2").value;
    let nota4_3 = document.getElementById("nota4.3").value;

    let nota5_1 = document.getElementById("nota5.1").value;
    let nota5_2 = document.getElementById("nota5.2").value;
    let nota5_3 = document.getElementById("nota5.3").value;

    let promedio1 = ((parseFloat(nota1_1)+parseFloat(nota1_2)+parseFloat(nota1_3))/3).toFixed(2);
    document.getElementById("promedio1").value = promedio1;
    
    let promedio2 = ((parseFloat(nota2_1)+parseFloat(nota2_2)+parseFloat(nota2_3))/3).toFixed(2);
    document.getElementById("promedio2").value = promedio2;

    let promedio3 = ((parseFloat(nota3_1)+parseFloat(nota3_2)+parseFloat(nota3_3))/3).toFixed(2);
    document.getElementById("promedio3").value = promedio3;

    let promedio4 = ((parseFloat(nota4_1)+parseFloat(nota4_2)+parseFloat(nota4_3))/3).toFixed(2);
    document.getElementById("promedio4").value = promedio4;

    let promedio5 = ((parseFloat(nota5_1)+parseFloat(nota5_2)+parseFloat(nota5_3))/3).toFixed(2);
    document.getElementById("promedio5").value = promedio5;
    }