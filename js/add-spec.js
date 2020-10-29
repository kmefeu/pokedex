function addSpec(target) {


    let specHtml = ` 
    <div class="specContainer">
                    <p class="textFlaivor">
                        Bullbasaur can be seen napping in bright sunlight. There is a seed on its back. By soakign
                        up the sun’s rays, the seed grows progressively larger.
                    </p>
                    <div class="line"></div>
                    <ul class="spec">
                        <li><b>species:</b>Seed Pokémon</li>
                        <li><b>height:</b>0.7m(2"04")</li>
                        <li><b>weight:</b>6.9kg(15.lbs)</li>
                        <li><b>abilities:</b>1. Overgrow</li>

                        <li><b>weaknesses:</b></li>
                    </ul>
                    <div class="tagsRow">
                        <div class="typeTag fireBg">
                            <div class="fire"></div>
                            <p>fire</p>
                        </div>
                        <div class="typeTag flyingBg">
                            <div class="flying"></div>
                            <p>flying</p>
                        </div>
                        <div class="typeTag iceBg">
                            <div class="ice"></div>
                            <p>ice</p>
                        </div>
                        <div class="typeTag psychicBg">
                            <div class="psychic"></div>
                            <p>psychic</p>
                        </div>
                    </div>


                </div>`

    target.insertAdjacentHTML("beforeend", specHtml);

}


document.getElementById("infinite-list")
    .addEventListener("click", function (event) {

        (event.target).classList.add("pokeTumbSpec");

        addSpec(event.target)
            (event.target.div[0]).classList.add("pokeInfoSpec")
            (event.target.div[1]).classList.add("pokeImageSpec")

        console.log(event.target)
    })


    // document.documentElement.style.setProperty('--cinza', '#333');