function calculateSalary() {
  const basic = Number(document.getElementById("basic").value);
  const daP = Number(document.getElementById("da").value);
  const hraP = Number(document.getElementById("hra").value);
  const medical = Number(document.getElementById("medical").value);
  const npsP = Number(document.getElementById("nps").value);

  if (!basic || basic <= 0) {
    alert("Please enter valid Basic Pay");
    return;
  }

  const da = basic * daP / 100;
  const hra = basic * hraP / 100;

  const totalEarnings = basic + da + hra + medical;

  const nps = (basic + da) * npsP / 100;
  const gis = 30;
  const totalDeduction = nps + gis;

  const netSalary = totalEarnings - totalDeduction;

  document.getElementById("result").innerHTML = `
    <h3>Salary Breakdown</h3>

    <div class="row"><span>Basic Pay</span><span>₹${basic}</span></div>
    <div class="row"><span>DA</span><span>₹${da.toFixed(2)}</span></div>
    <div class="row"><span>HRA</span><span>₹${hra.toFixed(2)}</span></div>
    <div class="row"><span>Medical</span><span>₹${medical}</span></div>

    <hr>

    <div class="row"><span>Total Earnings</span><span>₹${totalEarnings.toFixed(2)}</span></div>
    <div class="row"><span>NPS</span><span>₹${nps.toFixed(2)}</span></div>
    <div class="row"><span>GIS</span><span>₹30</span></div>

    <hr>

    <div class="net">Net Salary: ₹${netSalary.toFixed(0)}</div>
  `;
}
