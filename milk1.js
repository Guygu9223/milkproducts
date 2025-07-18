<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>מוצרי החלב - מערכת הזמנות</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f8f8f8;
      direction: rtl;
      padding: 20px;
    }
    h1 {
      color: #333;
    }
    form {
      background: white;
      padding: 20px;
      border-radius: 10px;
      margin-bottom: 30px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
    label {
      display: block;
      margin: 10px 0 5px;
    }
    input, select {
      width: 100%;
      padding: 8px;
      margin-bottom: 15px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      background: white;
    }
    th, td {
      border: 1px solid #ccc;
      padding: 10px;
      text-align: center;
    }
    th {
      background: #eee;
    }
  </style>
</head>
<body>

  <h1>ברוכים הבאים למערכת הזמנות - מוצרי החלב</h1>

  <form id="orderForm">
    <label>שם הלקוח:</label>
    <input type="text" id="clientName" required>

    <label>סוג מוצר:</label>
    <select id="productType">
      <option>חלב</option>
      <option>יוגורט</option>
      <option>גבינה</option>
      <option>שמנת</option>
    </select>

    <label>כמות:</label>
    <input type="number" id="quantity" required>

    <label>תאריך הזמנה:</label>
    <input type="date" id="orderDate" required>

    <label>אמצעי תשלום:</label>
    <select id="paymentMethod">
      <option>אשראי</option>
      <option>העברה בנקאית</option>
      <option>מזומן</option>
    </select>

    <button type="submit">הוסף הזמנה</button>
  </form>

  <h2>רשימת הזמנות</h2>
  <table id="ordersTable">
    <tr>
      <th>שם הלקוח</th>
      <th>סוג מוצר</th>
      <th>כמות</th>
      <th>תאריך הזמנה</th>
      <th>אמצעי תשלום</th>
    </tr>
  </table>

  <script>
    const form = document.getElementById('orderForm');
    const table = document.getElementById('ordersTable');

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('clientName').value;
      const product = document.getElementById('productType').value;
      const quantity = document.getElementById('quantity').value;
      const date = document.getElementById('orderDate').value;
      const payment = document.getElementById('paymentMethod').value;

      const row = table.insertRow();
      row.innerHTML = `
        <td>${name}</td>
        <td>${product}</td>
        <td>${quantity}</td>
        <td>${date}</td>
        <td>${payment}</td>
      `;

      form.reset();
    });
  </script>

</body>
</html>
