function showInputs() {
    const shape = document.getElementById("shape").value;
    const inputsDiv = document.getElementById("inputs");
    inputsDiv.innerHTML = ""; // Xóa các trường cũ

    if (shape === "rectangle") {
        inputsDiv.innerHTML = `
            <div class="form-group">
                <label for="length">Chiều dài:</label>
                <input type="number" id="length" placeholder="Nhập chiều dài" min="0" step="0.1">
            </div>
            <div class="form-group">
                <label for="width">Chiều rộng:</label>
                <input type="number" id="width" placeholder="Nhập chiều rộng" min="0" step="0.1">
            </div>
        `;
    } else if (shape === "circle") {
        inputsDiv.innerHTML = `
            <div class="form-group">
                <label for="radius">Bán kính:</label>
                <input type="number" id="radius" placeholder="Nhập bán kính" min="0" step="0.1">
            </div>
        `;
    } else if (shape === "triangle") {
        inputsDiv.innerHTML = `
            <div class="form-group">
                <label for="side1">Cạnh thứ nhất:</label>
                <input type="number" id="side1" placeholder="Nhập cạnh thứ nhất" min="0" step="0.1">
            </div>
            <div class="form-group">
                <label for="side2">Cạnh thứ hai:</label>
                <input type="number" id="side2" placeholder="Nhập cạnh thứ hai" min="0" step="0.1">
            </div>
            <div class="form-group">
                <label for="side3">Cạnh thứ ba:</label>
                <input type="number" id="side3" placeholder="Nhập cạnh thứ ba" min="0" step="0.1">
            </div>
        `;
    }
}

function calculate() {
    const shape = document.getElementById("shape").value;
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ""; // Xóa kết quả trước đó

    if (shape === "rectangle") {
        const length = parseFloat(document.getElementById("length").value);
        const width = parseFloat(document.getElementById("width").value);
        if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
            resultDiv.innerHTML = "Dữ liệu không hợp lệ! Vui lòng nhập số hợp lệ.";
        } else {
            const area = length * width;
            const perimeter = 2 * (length + width);
            resultDiv.innerHTML = `Diện tích: ${area} <br> Chu vi: ${perimeter}`;
        }
    } else if (shape === "circle") {
        const radius = parseFloat(document.getElementById("radius").value);
        if (isNaN(radius) || radius <= 0) {
            resultDiv.innerHTML = "Dữ liệu không hợp lệ! Vui lòng nhập số hợp lệ.";
        } else {
            const area = Math.PI * Math.pow(radius, 2);
            const circumference = 2 * Math.PI * radius;
            resultDiv.innerHTML = `Diện tích: ${area.toFixed(2)} <br> Chu vi: ${circumference.toFixed(2)}`;
        }
    } else if (shape === "triangle") {
        const side1 = parseFloat(document.getElementById("side1").value);
        const side2 = parseFloat(document.getElementById("side2").value);
        const side3 = parseFloat(document.getElementById("side3").value);
        if (
            isNaN(side1) || isNaN(side2) || isNaN(side3) ||
            side1 <= 0 || side2 <= 0 || side3 <= 0 ||
            (side1 + side2 <= side3) || (side1 + side3 <= side2) || (side2 + side3 <= side1)
        ) {
            resultDiv.innerHTML = "Dữ liệu không hợp lệ! Tổng hai cạnh bất kỳ phải lớn hơn cạnh còn lại.";
        } else {
            const s = (side1 + side2 + side3) / 2; // Nửa chu vi
            const area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3)); // Công thức Heron
            const perimeter = side1 + side2 + side3;
            resultDiv.innerHTML = `Diện tích: ${area.toFixed(2)} <br> Chu vi: ${perimeter}`;
        }
    } else {
        resultDiv.innerHTML = "Vui lòng chọn loại hình và nhập dữ liệu.";
    }
}
