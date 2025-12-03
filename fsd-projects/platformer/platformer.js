$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid

    // TODO 2 - Create Platforms
    createPlatform(300, 650, 100, 10, "red");
    createPlatform(500, 550, 100, 10, "black");
    createPlatform(700, 450, 100, 10, "blue");
    createPlatform(900, 350, 100, 10, "purple");
    createPlatform(1100, 250, 100, 10, "lime");
    createPlatform(1300, 150, 100, 10, "yellow");
    // TODO 3 - Create Collectables
    createCollectable("steve", 300, 600);
    createCollectable("grace", 500, 500, 0.5, 0.7);
    createCollectable("diamond", 700, 400, 0.5, 0.7);
    createCollectable("database", 1350, 100, 0.5, 0.7);
    // TODO 4 - Create Cannons
    createCannon("top", 300, 1000);
    createCannon("right", 250, 3000);
    createCannon("bottom", 600, 1000);
    createCannon("top", 900, 1000);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
