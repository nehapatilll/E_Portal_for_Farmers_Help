const table = document.querySelector("#prices-table");

const getData = async () => {
  const url = "http://localhost:6942/grains";
  try {
    const res = await fetch(url);
    const data = await res.json();

    const items = [
      "BRENTOIL",
      "CORN",
      "COTTON",
      "MILK",
      "POTATOES",
      "SOYBEAN",
      "SUGAR",
      "WHEAT",
    ];

    const rates = data.data.rates;

    Object.keys(rates).forEach((key) => {
      if (!items.includes(key)) return;

      const itemName = key;
      const price = rates[itemName];

      table.appendChild(getTableRow(itemName, price));
    });
  } catch (error) {
    console.error(error);
  }
};

function getTableRow(itemName, price) {
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");

  td1.innerText = itemName;
  td2.innerText = price;

  tr.appendChild(td1);
  tr.appendChild(td2);

  return tr;
}

getData();
