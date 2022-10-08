var tellimus = { 
  "id": 2113, 
  "orderNumber": "E210126001", 
  "createdAt": "2021-01-26 16:04:24", 
  "clientName": "Kalle Tali", 
  "deliveryType": "Omniva smartpost", 
  "deliveryValue": 178, 
  "rows": [ 
    { 
      "article_id": 31, 
      "name": "Kohvimasin De'Longhi Dolce Gusto Piccolo EDG100.W", 
      "product_code": "257549", 
      "price": 49.1666666667, 
      "amount": 1, 
      "vat": 0.2 
    }, 
    { 
      "article_id": 23420, 
      "name": "Kohvikapslid Nescafe Dolce Gusto Espresso Intenso, 128 g, 16 tk", 
      "product_code": "355836", 
      "price": 5.0666666667, 
      "amount": 2, 
      "vat": 0.2 
    }, 
    { 
      "article_id": 23421, 
      "name": "Kohvikapslid Nescafe Dolce Gusto Latte Macchiato, 194 g, 16 tk", 
      "product_code": "000000000501267301", 
      "price": 5.825, 
      "amount": 1, 
      "vat": 0.2 
    } 
  ] 
}

function toode(a) { 
    return tellimus.rows[a].name + " Kogus: " + tellimus.rows[a].amount
}

function tooteHind(a) { 
    return (tellimus.rows[a].price * tellimus.rows[a].amount * 1.2)
}

function koguHind(a, b, c) { 
    return (tooteHind(a) + tooteHind(b) + tooteHind(c))
}

for (i = 0; i <= 2; i++) { 
   console.log(toode(i))
   console.log(tooteHind(i).toFixed(2) + "€")
   
   if (i >= 2) { 
     console.log("Kokku: " + koguHind(0, 1, 2).toFixed(2) + "€")
   }
}
