// DATA RESOURCES
let dataResource = [
	{
		heading: "Technology Innovation",
		bodyText: "Continuous technology innovation remains a constant in the renewable power generation market. Bigger wind turbines with larger swept areas harvest more electricity from the same resource. New solar PV cell architectures offer greater efficiency. Real-time data and ‘big data’ have enhanced predictive maintenance and reduced operation and maintenance costs. These are just a few examples of the continuous innovation driving reductions in installed costs, unlocking performance improvements and reducing O and M costs. Technology improvements, therefore, remain a key part of the cost reduction potential for renewable power. At the same time, the maturity and proven track record of renewable power technologies now reduces project risk, significantly lowering the cost of capital. With today’s low equipment costs, innovations that unlock efficiencies in manufacturing, reduce installed costs or improve performance for power-generation equipment will take on increasing significance- according to a report by irena.org",
		imgUrl: "./img/turbine.jpg"
    },
	{
		heading: "Competitive Procurement",
		bodyText: "Competitive procurement, amid globalisation of the renewable power market, has emerged more recently as another key driver. In many parts of the world, renewable power technologies now offer the lowest cost source of new power generation. In the past, typically, there was a framework offering direct financial support, often tailored to individual technologies (e.g solar PV) and even segments (e.g. varying support for residential, commercial and utility-scale sectors, sometimes differentiated by other factors such as whether they are building-integrated or not). Now, this is being replaced by a favourable regulatory and institutional framework that sets the stage for competitive procurement of renewable power generation to meet a country’s energy, environmental and development policy goals - according to a report by irena.org.",
		imgUrl: "./img/solar.jpg"
    },
	{
		heading: "Active Project Developers",
		bodyText: "As competitive procurement drives costs lower, a wide range of project developers are placing and adjusting themselves for growth. Around the world, medium-to-large renewable project developers are adapting to this new reality and increasingly looking for global opportunities to expand their business. They are bringing, not only their experience, but access to international capital markets. In competition with their peers, they are finding ways to continuously reduce costs. The combination of these factors is increasingly driving cost reductions for renewables, with effects that will only grow in magnitude- according to a report by irena.org",
		imgUrl: "./img/scientists.jpg"
    }
];

let $btns = document.querySelectorAll('button');
let $content = document.querySelector(".content");

/*Page Load*/
function pagLoad() {
	$content.innerHTML = `<h3>${dataResource[0].heading}</h3>
                            <img src="${dataResource[0].imgUrl}" alt="placeholder">
                              <p>${dataResource[0].bodyText}</p>`;
}
window.addEventListener("load", pagLoad);

/*Button Active State*/
let betContainer = document.getElementById("navigation");
let betns = betContainer.getElementsByClassName("btn");

for (let i = 0; i < betns.length; i++) {
	betns[i].addEventListener("click", function () {
		let crnt = document.getElementsByClassName("active");
		crnt[0].className = crnt[0].className.replace(" active", "");
		this.className += " active";
	});
}

/*Event Handler*/
function eventHandler(ev) {
	let clickedBtn = ev.target;
	let btnText = clickedBtn.innerText;
	if (btnText === "Page 1") {
		$content.innerHTML = `<h3>${dataResource[0].heading}</h3>
                              <img src="${dataResource[0].imgUrl}" alt="placeholder">
                              <p>${dataResource[0].bodyText}</p>`;
	} else if (btnText === "Page 2") {
		$content.innerHTML = `<h3>${dataResource[1].heading}</h3>
                              <img src="${dataResource[1].imgUrl}" alt="placeholder">
                              <p>${dataResource[1].bodyText}</p>`;
	} else {
		$content.innerHTML = `<h3>${dataResource[2].heading}</h3>
                              <img src="${dataResource[2].imgUrl}" alt="placeholder">
                              <p>${dataResource[2].bodyText}</p>`;
	}
}

for (let i = 0; i < $btns.length; i++) {
	$btns[i].addEventListener("click", eventHandler);
}