let x = 10,
    randoms = 0,
    array = [],
    min = 0,
    max = 10,
    sum = 0,
    kSum = 0,
    k = 0

for(i = 0; i < 10; i++) {
    array[i] = []
    for(W = 0; W < 10; W++) {
        array[i][W] = Math.floor(Math.random() * 10) + 1
    }
}
document.write("<p style='color: red'>😡Червоний колір відповідає за найменьші цифри в рядках або стовпчиках</p>")
document.write("<p style='color: purple'>😈Фіолетовий колір відповідає за найбільші цифри в рядках або стовпчиках</p>")
document.write("<p style='color: green'>🤢Зелений колір відповідає за серднє значення усіх цифр в рядках або стовпчиках</p>")
document.write("<table border='1' cellspacing=0' cellpading='4' style='border-collapse: collapse;'>")
    document.write("<tbody>")
        for (let i = 0; i < 10; i++) {
            min = 0
            max = 11
            kSum = 0
            document.write("<tr>")
                for(W = 0; W < 10; W++) {
                    let gg = array[i][W]
                    if (gg == max) {
                        document.write("<td style='background-color: red'>" + gg + "</td>")
                    } else if (gg == min) {
                        document.write("<td style='background-color: purple'>" + gg + "</td>")
                    } else {
                        document.write("<td>" + gg + "</td>")
                    }
                    if (gg < max) max = gg
                    if (gg > min) min = gg
                    kSum += gg
                }
            let avg = (kSum / 10).toFixed(1)
            document.write("<td style='background-color: red'>" + max + "</td>")
            document.write("<td style='background-color: purple'>" + min + "</td>")
            document.write("<td style='background-color: green'>" + avg + "</td>")
            document.write("</tr>")
        }
        for(i = 0; i < 10; i++) {
            for(W = 0; W < 10; W++) {
                sum += array[i][W]
            }
        }
        for(cs = 0; cs < 3; cs++) {
            document.write("<tr>")
            for(j = 0; j < x; j++) {
                min = 0
                max = 10
                sSum = 0
                for(i = 0; i < x; i++) {
                    let sg = array[i][j]
                    if (sg < max) max = sg
                    if (sg > min) min = sg
                    sSum += sg
                }
                let avg = (sSum / x).toFixed(1)
                if (cs === 0) document.write("<td style='background-color: red'>" + max + "</td>")
                if (cs === 1) document.write("<td style='background-color: purple'>" + min + "</td>")
                if (cs === 2) document.write("<td style='background-color: green'>" + avg + "</td>")
            }

            if (cs === 0) {
                document.write("<td colspan='3' rowspan='3' class='suma'><b>" + sum + "</b></td>");
            }

            document.write("</tr>")
        }
    document.write("</tbody>")
document.write("</table>")