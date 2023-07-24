window.addEventListener('load', function() {
    
    const takeoffButton = document.getElementById('takeoff');
    takeoffButton.addEventListener('click', function() {
    
      const confirmed = window.confirm("Confirm that the shuttle is ready for takeoff.");
      if (confirmed) {
        
        const flightStatus = document.getElementById('flightStatus');
        flightStatus.innerText = "Shuttle in flight";
  
        const shuttleBackground = document.getElementById('shuttleBackground');
        shuttleBackground.style.backgroundColor = "blue";
  
        const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
        const currentHeight = Number(spaceShuttleHeight.innerText);
        spaceShuttleHeight.innerText = currentHeight + 10000;
      }
    });
  });
  
  window.addEventListener('load', function() {
    
    const landButton = document.getElementById('landing');
    landButton.addEventListener('click', function() {
      
      window.alert("The shuttle is landing. Landing gear engaged.");
  
    
      const flightStatus = document.getElementById('flightStatus');
      flightStatus.innerText = "The shuttle has landed.";
  
      const shuttleBackground = document.getElementById('shuttleBackground');
      shuttleBackground.style.backgroundColor = "green";
  
      const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
      spaceShuttleHeight.innerText = "0";
    });
  });
  
  window.addEventListener('load', function() {
    
    const abortButton = document.getElementById('missionAbort');
    abortButton.addEventListener('click', function() {
      
      const confirmed = window.confirm("Confirm that you want to abort the mission.");
      if (confirmed) {
        
        const flightStatus = document.getElementById('flightStatus');
        flightStatus.innerText = "Mission aborted.";
  
        const shuttleBackground = document.getElementById('shuttleBackground');
        shuttleBackground.style.backgroundColor = "green";
  
        const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
        spaceShuttleHeight.innerText = "0";
      }
    });
  });
  
  window.addEventListener('load', function() {
    
    const upButton = document.getElementById('up');
    upButton.addEventListener('click', function() {
      moveRocket('up');
      updateShuttleHeight('up');
    });
  
    
    const downButton = document.getElementById('down');
    downButton.addEventListener('click', function() {
      moveRocket('down');
      updateShuttleHeight('down');
    });
  
    
    const rightButton = document.getElementById('right');
    rightButton.addEventListener('click', function() {
      moveRocket('right');
    });
  
    
    const leftButton = document.getElementById('left');
    leftButton.addEventListener('click', function() {
      moveRocket('left');
    });
  
    
    function moveRocket(direction) {
      const rocketImage = document.getElementById('rocket');
      let topPos = parseInt(rocketImage.style.top) || 0;
      let leftPos = parseInt(rocketImage.style.left) || 0;
  
      if (direction === 'up') {
        topPos -= 10;
      } else if (direction === 'down') {
        topPos += 10;
      } else if (direction === 'right') {
        leftPos += 10;
      } else if (direction === 'left') {
        leftPos -= 10;
      }
  
      rocketImage.style.top = topPos + 'px';
      rocketImage.style.left = leftPos + 'px';
    }
  
    function updateShuttleHeight(direction) {
    const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
    const currentHeight = Number(spaceShuttleHeight.innerText);
  
      if (direction === 'up') {
        spaceShuttleHeight.innerText = currentHeight + 10000;
      } else if (direction === 'down') {
        spaceShuttleHeight.innerText = currentHeight - 10000;
      }
    }
  });
  