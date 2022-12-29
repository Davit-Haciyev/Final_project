import React, { useState, useEffect } from "react";
import "./Herobox.css"
import batman from "./images/batman.jpg"
import anonim from "./images/anonim.png"

export default function HerosBlocks() {
    const [data, setData] = useState();
    const [number, setNumber] = useState(Math.floor(Math.random() * 731 + 1));

    const onClick = () => {
        setNumber(Math.floor(Math.random() * 731 + 1));
        showSuperheroDetails(data);
    };

    useEffect(() => {
        fetch(`https://www.superheroapi.com/api.php/727054372039115/${number}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
                console.log('hello', data)
            });
    }, [number]);

    const allTabsBody = document.querySelectorAll('.tab-body-single');
    const allTabsHead = document.querySelectorAll('.tab-head-single');
    let activeTab = 1;

    const init = () => {
        showActiveTabBody();
        showActiveTabHead();
    }

    const showActiveTabHead = () => allTabsHead[activeTab - 1].classList.add('active-tab');

    const showActiveTabBody = () => {
        hideAllTabBody();
        allTabsBody[activeTab - 1].classList.add('show-tab');
    }

    const hideAllTabBody = () => allTabsBody.forEach(singleTabBody => singleTabBody.classList.remove('show-tab'));
    const hideAllTabHead = () => allTabsHead.forEach(singleTabHead => singleTabHead.classList.remove('active-tab'));

    window.addEventListener('DOMContentLoaded', () => init());
    // button event listeners
    allTabsHead.forEach(singleTabHead => {
        singleTabHead.addEventListener('click', () => {
            hideAllTabHead();
            activeTab = singleTabHead.dataset.id;
            showActiveTabHead();
            showActiveTabBody();
        });
    });

    function showSuperheroDetails(data){
        console.log(data);
        document.querySelector('.app-body-content-thumbnail').innerHTML = `
            <img src = "${data.image.url? data.image.url: anonim}">
        `;
    
        document.querySelector('.name').textContent = data.name;
        document.querySelector('.powerstats').innerHTML = `
        <li>
            <div>
                <i class = "fa-solid fa-shield-halved"></i>
                <span>intelligence</span>
            </div>
            <span>${data.powerstats.intelligence}</span>
        </li>
        <li>
            <div>
                <i class = "fa-solid fa-shield-halved"></i>
                <span>strength</span>
            </div>
            <span>${data.powerstats.strength}</span>
        </li>
        <li>
            <div>
                <i class = "fa-solid fa-shield-halved"></i>
                <span>speed</span>
            </div>
            <span>${data.powerstats.speed}</span>
        </li>
        <li>
            <div>
                <i class = "fa-solid fa-shield-halved"></i>
                <span>durability</span>
            </div>
            <span>${data.powerstats.durability}</span>
        </li>
        <li>
            <div>
                <i class = "fa-solid fa-shield-halved"></i>
                <span>power</span>
            </div>
            <span>${data.powerstats.power}</span>
        </li>
        <li>
            <div>
                <i class = "fa-solid fa-shield-halved"></i>
                <span>combat</span>
            </div>
            <span>${data.powerstats.combat}</span>
        </li>
        `;
    
        document.querySelector('.biography').innerHTML = `
        <li>
            <span>full name</span>
            <span>${data.biography['full-name']}</span>
        </li>
        <li>
            <span>alert-egos</span>
            <span>${data.biography['alter-egos']}</span>
        </li>
        <li>
            <span>aliases</span>
            <span>${data.biography['aliases']}</span>
        </li>
        <li>
            <span>place-of-birth</span>
            <span>${data.biography['place-of-birth']}</span>
        </li>
        <li>
            <span>first-apperance</span>
            <span>${data.biography['first-appearance']}</span>
        </li>
        <li>
            <span>publisher</span>
            <span>${data.biography['publisher']}</span>
        </li>
        `;
    
        document.querySelector('.appearance').innerHTML = `
        <li>
            <span>
                <i class = "fas fa-star"></i> gender
            </span>
            <span>${data.appearance['gender']}</span>
        </li>
        <li>
            <span>
                <i class = "fas fa-star"></i> race
            </span>
            <span>${data.appearance['race']}</span>
        </li>
        <li>
            <span>
                <i class = "fas fa-star"></i> height
            </span>
            <span>${data.appearance['height'][0]}</span>
        </li>
        <li>
            <span>
                <i class = "fas fa-star"></i> weight
            </span>
            <span>${data.appearance['weight'][0]}</span>
        </li>
        <li>
            <span>
                <i class = "fas fa-star"></i> eye-color
            </span>
            <span>${data.appearance['eye-color']}</span>
        </li>
        <li>
            <span>
                <i class = "fas fa-star"></i> hair-color
            </span>
            <span>${data.appearance['hair-color']}</span>
        </li>
        `;
    
        document.querySelector('.connections').innerHTML = `
        <li>
            <span>group--affiliation</span>
            <span>${data.connections['group-affiliation']}</span>
        </li>
        <li>
            <span>relatives</span>
            <span>${data.connections['relatives']}</span>
        </li>im
        `;
    }

    return (<div className="HerosBox">

        
        <div class="main-wrapper">
            <div class="app">
                <div class="app-header">
                    <h2 class="app-header-title">Random<span>Hero</span></h2>
                    <button className="randomherobutton"  onClick={onClick}>Click for hero</button>
                   
                </div>

                <div class="app-body">
                    <div class="app-body-content">
                        <div class="app-body-content-thumbnail">
                            <img src={batman} alt="image"/>
                        </div>

                        <div class="app-body-content-list">
                            <div class="name">Batman</div>

                            <div class="app-body-tabs-head">
                                <button type="button" class="tab-head-single active-tab" data-id="1">
                                    <span>powerstats</span>
                                </button>
                                <button type="button" class="tab-head-single" data-id="2">
                                    <span>biography</span>
                                </button>
                                <button type="button" class="tab-head-single" data-id="3">
                                    <span>appearance</span>
                                </button>
                                <button type="button" class="tab-head-single" data-id="4">
                                    <span>connections</span>
                                </button>
                            </div>
                            <div class="app-body-tabs-body">
                                <ul class="tab-body-single powerstats show-tab">
                                    <li>
                                        <div>
                                            <i class="fa-solid fa-shield-halved"></i>
                                            <span>intelligence</span>
                                        </div>
                                        <span>100</span>
                                    </li>
                                    <li>
                                        <div>
                                            <i class="fa-solid fa-shield-halved"></i>
                                            <span>strength</span>
                                        </div>
                                        <span>26</span>
                                    </li>
                                    <li>
                                        <div>
                                            <i class="fa-solid fa-shield-halved"></i>
                                            <span>speed</span>
                                        </div>
                                        <span>27</span>
                                    </li>
                                    <li>
                                        <div>
                                            <i class="fa-solid fa-shield-halved"></i>
                                            <span>durability</span>
                                        </div>
                                        <span>50</span>
                                    </li>
                                    <li>
                                        <div>
                                            <i class="fa-solid fa-shield-halved"></i>
                                            <span>power</span>
                                        </div>
                                        <span>47</span>
                                    </li>
                                    <li>
                                        <div>
                                            <i class="fa-solid fa-shield-halved"></i>
                                            <span>combat</span>
                                        </div>
                                        <span>100</span>
                                    </li>
                                </ul>

                                <ul class="tab-body-single biography">
                                    <li>
                                        <span>full name</span>
                                        <span>terry mcginnis</span>
                                    </li>
                                    <li>
                                        <span>alert-egos</span>
                                        <span>no alter egos found.</span>
                                    </li>
                                    <li>
                                        <span>aliases</span>
                                        <span>Batman II, The Tomorrow Knight, Batman Beyond</span>
                                    </li>
                                    <li>
                                        <span>place-of-birth</span>
                                        <span>Gothan City, 25th Century</span>
                                    </li>
                                    <li>
                                        <span>first-apperance</span>
                                        <span>Batman Beyond #1</span>
                                    </li>
                                    <li>
                                        <span>publisher</span>
                                        <span>DC Comics</span>
                                    </li>
                                </ul>

                                <ul class="tab-body-single appearance">
                                    <li>
                                        <span>
                                            <i class="fas fa-star"></i> gender
                                        </span>
                                        <span>Male</span>
                                    </li>
                                    <li>
                                        <span>
                                            <i class="fas fa-star"></i> race
                                        </span>
                                        <span>human</span>
                                    </li>
                                    <li>
                                        <span>
                                            <i class="fas fa-star"></i> height
                                        </span>
                                        <span>5' 10''</span>
                                    </li>
                                    <li>
                                        <span>
                                            <i class="fas fa-star"></i> weight
                                        </span>
                                        <span>170 lb</span>
                                    </li>
                                    <li>
                                        <span>
                                            <i class="fas fa-star"></i> eye-color
                                        </span>
                                        <span>blue</span>
                                    </li>
                                    <li>
                                        <span>
                                            <i class="fas fa-star"></i> hair-color
                                        </span>
                                        <span>black</span>
                                    </li>
                                </ul>
                                <ul class="tab-body-single connections">
                                    <li>
                                        <span>group--affiliation</span>
                                        <span>Batman Family, Justice League Unlimited</span>
                                    </li>
                                    <li>
                                        <span>relatives</span>
                                        <span>Bruce Wayne (biological father), Warren McGinnis (father, deceased), Mary McGinnis (mother), Matt McGinnis (brother)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
