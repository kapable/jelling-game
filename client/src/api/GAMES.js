const GAMES = [
    // order games with newly date order
    {
        title:"Palette Game",
        titleKor:"팔레트 게임",
        sourceURL:"https://jellinggame.com/Games/palette/index.html",
        mainUrl:"palette",
        thumbImage:"https://images.jellinggame.com/thumbImages/palette-thumb.png",
        introImage:"https://images.jellinggame.com/introImages/palette-intro.png",
        lang:"Eng",
        desc:`- It is a game where paint is dropped and synthesized by touch.\n
        - Finally, making a palette and increasing the score.`,
        descKor:`- 터치 방식으로 물감을 드롭하여 합성하는 게임 입니다.\n
                - 최종적으로 팔레트를 만들고 점수를 높히는 방식의 게임`,
    },
    {
        title:"Color Match",
        titleKor:"컬러 매치",
        sourceURL:"https://jellinggame.com/Games/colormatch/index.html",
        mainUrl:"colormatch",
        thumbImage:"https://images.jellinggame.com/thumbImages/colormatch-thumb.png",
        introImage:"https://images.jellinggame.com/introImages/colormatch-intro.png",
        lang:"Eng",
        desc:`- A game that changes the color of the bar at the bottom according to the falling circle as a click-based game`,
        descKor:`- 클릭 방식의 게임으로 내려오는 원에 맞춰 하단에 바의 색상을 변경하는 게임`,
    },
    {
        title:"Sky Darts",
        titleKor:"스카이다트",
        sourceURL:"https://jellinggame.com/Games/skydarts/index.html",
        mainUrl:"skydarts",
        thumbImage:"https://images.jellinggame.com/thumbImages/skydarts-thumb.png",
        introImage:"https://images.jellinggame.com/introImages/skydarts-intro.png",
        lang:"Eng",
        desc:`- When you start the game, there is a click button on the left (red) and right (green). \n
        - Red and green balloons come down from the sky, and press the button according to each color. \n
        - Pop the red balloon with a red dart, and pop the green balloon with a green dart.\n
        - If you pop it with a dart of a different color, the game is over. Try your best to break through the high score.`,
        descKor:`- 게임을 시작하면 왼쪽(빨간색) 오른쪽(초록색)의 클릭 버튼이 있습니다.\n
        - 하늘에서는 빨간색과 초록색의 풍선이 내려오는데, 각 색에 맞게 버튼을 누릅니다.\n
        - 빨간색풍선은 빨간색다트로 터뜨리고, 초록색풍선은 초록색다트로 터뜨립니다.\n
        - 다른 색의 다트로 터뜨리면 게임오버 됩니다. 최대한 많이 해서 하이스코어를 돌파해보세요.`,
    },
    {
        title:"Space Box",
        titleKor:"스페이스 박스",
        sourceURL:"https://jellinggame.com/Games/spacebox/index.html",
        mainUrl:"spacebox",
        thumbImage:"https://images.jellinggame.com/thumbImages/spacebox-thumb.png",
        introImage:"https://images.jellinggame.com/introImages/spacebox-intro.png",
        lang:"Eng",
        desc:`- If you start the game and wait, you will get a square of color.\n
        - If you click on the big square, it turns red and when you click off, it turns blue.\n
        - Press and remove the large square to match the color of the flying square.\n
        - Continue until high score.`,
        descKor:`- 게임을 시작하고 기다리면 색상의 네모가 날라온다.\n
        - 큰 네모를 꾹 클릭하고있으면 빨간색으로 변하고 클릭을 떼면 푸른색으로 변한다.\n 
        - 큰 네모를 꾹 누르고 떼는 것으로 날아오는 네모의 색상에 맞춘다.\n
        - 하이스코어를 낼 때 까지 계속해서 한다. `,
    },
    {
        title:"Shooting Goal",
        titleKor:"슈팅골",
        sourceURL:"https://jellinggame.com/Games/shootinggoal/index.html",
        mainUrl:"shootinggoal",
        thumbImage:"https://images.jellinggame.com/thumbImages/shootinggoal-thumb.png",
        introImage:"https://images.jellinggame.com/introImages/shootinggoal-intro.png",
        lang:"Eng",
        desc:`Mini casual game\n that you can enjoy with a simple click.
        It's a game where you drag and put the ball into the hole.\n
        It's characterized by a sense of speed.`,
        descKor:`간단한 클릭으로 즐길 수 있는 미니 캐쥬얼 게임\n
        드래그하여 공을 홀에 넣는 게임 입니다.\n
        속도감이 있는게 특징입니다.`,
    },
    {
        title:"Powder Shot",
        titleKor:"파우더샷",
        sourceURL:"https://jellinggame.com/Games/powdershot/index.html",
        mainUrl:"powdershot",
        thumbImage:"https://images.jellinggame.com/thumbImages/powdershot-thumb.png",
        introImage:"https://images.jellinggame.com/introImages/powdershot-intro.png",
        lang:"Eng",
        desc:`- When the ball comes down, press it to match the color to burst the ball.\n
        - The person who pops as much as possible wins and gets a high score.`,
        descKor:`- 공이 내려오면 색상에 맞게 눌러 공을 터트립니다.\n
        - 최대한 많이 터트리는 사람이 승리하고 하이스코어가 됩니다.`,
    },
    {
        title:"Panda Bridge",
        titleKor:"판다브릿지",
        sourceURL:"https://jellinggame.com/Games/pandabridge/index.html",
        mainUrl:"pandabridge",
        thumbImage:"https://images.jellinggame.com/thumbImages/pandabridge-thumb.png",
        introImage:"https://images.jellinggame.com/introImages/pandabridge-intro.png",
        lang:"Eng",
        desc:`- Mini casual game\n that you can enjoy with a simple click.
        It is a game in which pandas place bridges (bamboo) to pass through the road.\n
        Score game that you can enjoy indefinitely.`,
        descKor:`- 간단한 클릭으로 즐길 수 있는 미니 캐쥬얼 게임\n
        팬더가 길을 지나가기 위한 다리(대나무)를 놓는 게임 입니다.\n
        무한으로 즐길 수 있는 스코어 게임
        `,
    },
    {
        title:"Numbubble",
        titleKor:"넘버블",
        sourceURL:"https://jellinggame.com/Games/numbubble/index.html",
        mainUrl:"numbubble",
        thumbImage:"https://images.jellinggame.com/thumbImages/numbubble-thumb.png",
        introImage:"https://images.jellinggame.com/introImages/numbubble-intro.png",
        lang:"Eng",
        desc:`- It is a puzzle game that is cleared without all the numbers in the field.`,
        descKor:`- 필드안에 있는 모든 숫자를 없에면 클리어 되는 퍼즐 게임 입니다.`,
    },
    {
        title:"Neon Circle",
        titleKor:"네온서클",
        sourceURL:"https://jellinggame.com/Games/neoncircle/index.html",
        mainUrl:"neoncircle",
        thumbImage:"https://images.jellinggame.com/thumbImages/neoncircle-thumb.png",
        introImage:"https://images.jellinggame.com/introImages/neoncircle-intro.png",
        lang:"Eng",
        desc:`- You have to fly the ball as many times as the number written in the flying circle.\n
        If you hit a line that spins around a circle, the game is over, so identify the movement of the line and\n
        The key point of the game is to shoot as many balls as possible.`,
        descKor:`-  날리는 원형에 적혀진 숫자만큼 공을 날려야 합니다.\n
        원형 주변에 빙빙 도는 선에 부딪히면 게임오버 되니, 선의 동선을 파악하여\n
        최대한 많이 공을 발사하는 것이 중점인 게임입니다.`,
    },
    {
        title:"Maze Board",
        titleKor:"메이즈보드",
        sourceURL:"https://jellinggame.com/Games/mazeboard/index.html",
        mainUrl:"mazeboard",
        thumbImage:"https://images.jellinggame.com/thumbImages/mazeboard-thumb.png",
        introImage:"https://images.jellinggame.com/introImages/mazeboard-intro.png",
        lang:"Eng",
        desc:`- Mini casual game\n that you can enjoy with a simple click.
        Drag each square in a square space. Never\n
        It's a game that fills all the spaces by connecting them without taking them off.`,
        descKor:`- 간단한 클릭으로 즐길 수 있는 미니 캐쥬얼 게임\n
        네모로 이루어진 공간에서 드래그를 하여 각 네모를 한번도\n
        떼지않고 연결하여 모든 공간을 채우는 게임 입니다.
        `,
    },
    {
        title:"Jump Up Box",
        titleKor:"점프업박스",
        sourceURL:"https://jellinggame.com/Games/jumpupbox/index.html",
        mainUrl:"jumpupbox",
        thumbImage:"https://images.jellinggame.com/thumbImages/jumpupbox-thumb.png",
        introImage:"https://images.jellinggame.com/introImages/jumpupbox-intro.png",
        lang:"Eng",
        desc:`- Click the direction opposite to the direction I want to go.\n
        - The square fires the ball, and the square jumps and jumps as much as the ball hits the wall.\n
        - Using each terrain well, jump the square and move it to the flag.\n
        - When you arrive at the flag, you will be cleared and move on to the next round.`,
        descKor:`- 내가 가고싶은 방향 반대 방향을 클릭한다.\n
        - 네모가 공을 발사하게 되고 공이 벽에 맞는 만큼 네모가 점프해서 뛰어 오른다.\n
        - 각 지형을 잘 활용하여 네모를 점프시켜 깃발까지 네모를 옮긴다.\n
        - 깃발에 도착하면 클리어가 되고 다음 라운드로 넘어간다. `,
    },
    {
        title:"Jelly Puzzle",
        titleKor:"젤리퍼즐",
        sourceURL:"https://jellinggame.com/Games/jellypuzzle/index.html",
        mainUrl:"jellypuzzle",
        thumbImage:"https://images.jellinggame.com/thumbImages/jellypuzzle-thumb.png",
        introImage:"https://images.jellinggame.com/introImages/jellypuzzle-intro.png",
        lang:"Eng",
        desc:`- It's a game where you put together a jelly-shaped puzzle..`,
        descKor:`- 젤리모양의 퍼즐을 맞춰가는 게임.`,
    },
    {
        title:"jelling2048",
        titleKor:"젤링2048",
        sourceURL:"https://jellinggame.com/Games/jelling2048/index.html",
        mainUrl:"jelling2048",
        thumbImage:"https://images.jellinggame.com/thumbImages/jelling2048-thumb.png",
        introImage:"https://images.jellinggame.com/introImages/jelling2048-intro.png",
        lang:"Eng",
        desc:`- It's a game where you make a multiple of two into a puzzle..`,
        descKor:`- 2의 배수를 퍼즐 형태로 만들어가는 게임 `,
    },
    {
        title:"Go To Home",
        titleKor:"고투홈",
        sourceURL:"https://jellinggame.com/Games/gotohome/index.html",
        mainUrl:"gotohome",
        thumbImage:"https://images.jellinggame.com/thumbImages/gotohome-thumb.png",
        introImage:"https://images.jellinggame.com/introImages/gotohome-intro.png",
        lang:"Eng",
        desc:`- A stage-type game where you use \n
        the arrow key to unlock the maze and pass through the stage.`,
        descKor:`- - 방향키를 이용해서 미로를 풀어 스테이지를 통과하는 스테이지형 게임.`,
    },
    {
        title:"Fruits Line",
        titleKor:"후루츠라인",
        sourceURL:"https://jellinggame.com/Games/fruitsline/index.html",
        mainUrl:"fruitsline",
        thumbImage:"https://images.jellinggame.com/thumbImages/fruitsline-thumb.png",
        introImage:"https://images.jellinggame.com/introImages/fruitsline-intro.png",
        lang:"Eng",
        desc:`- It's a game where fruit characters follow the line in zigzag..`,
        descKor:`- 과일 캐릭터가 지그재그로 라인을 따라서 가는 형태의 게임`,
    },
    {
        title:"Fruits Box Run",
        titleKor:"후르츠 박스 런",
        sourceURL:"https://jellinggame.com/Games/fruitboxrun/index.html",
        mainUrl:"fruitboxrun",
        thumbImage:"https://images.jellinggame.com/thumbImages/fruitsboxrun-thumb.png",
        introImage:"https://images.jellinggame.com/introImages/fruitsboxrun-intro.png",
        lang:"Eng",
        desc:`- To the target point, you have to create a box at the bottom of the obstacle.\n`,
        descKor:`- 목표지점까지 장애물의 목표만큼 하단에 박스를 생성에서 진행하는 게임.`,
    },
    {
        title:"Finger Dunk",
        titleKor:"핑거 덩크",
        sourceURL:"https://jellinggame.com/Games/fingerdunk/index.html",
        mainUrl:"fingerdunk",
        thumbImage:"https://images.jellinggame.com/thumbImages/fingerdunk-thumb.png",
        introImage:"https://images.jellinggame.com/introImages/fingerdunk-intro.png",
        lang:"Eng",
        desc:`- Drag the ball to adjust the position of the net.\n
        - If you release the drag, the ball will fire.`,
        descKor:`-  공을 드래그 해서 골대 위치 맞춥니다.\n
        - 드래그를 풀면 공이 발사 됩니다.`,
    },
    {
        title:"Find the Fruits",
        titleKor:"파인 더 후르츠",
        sourceURL:"https://jellinggame.com/Games/findthefruits/index.html",
        mainUrl:"findthefruits",
        thumbImage:"https://images.jellinggame.com/thumbImages/findthefruits-thumb.png",
        introImage:"https://images.jellinggame.com/introImages/findthefruits-intro.png",
        lang:"Eng",
        desc:`- Find the fruit in the box.`,
        descKor:`- 박스안에 있는 과일을 찾는 게임.`,
    },
    {
        title:"Box Building",
        titleKor:"박스 빌딩",
        sourceURL:"https://jellinggame.com/Games/boxbuilding/index.html",
        mainUrl:"boxbuilding",
        thumbImage:"https://images.jellinggame.com/thumbImages/boxbuilding-thumb.png",
        introImage:"https://images.jellinggame.com/introImages/boxbuilding-intro.png",
        lang:"Eng",
        desc:`- It's a click-type game in which you stop clicking on a moving box and pile it up.\n
                - Click the moving box on time (you can press anywhere on the screen)`,
        descKor:`- 클릭 방식의 게임으로 움직이는 상자를 클릭으로 멈추고 쌓아가는 게임 입니다.\n
                - 움직이는 박스를 타이밍에 맞춰 클릭 (화면 내 아무 곳이나 눌러도 됩니다.)`,
    },
    {
        title:"Cube Up!",
        titleKor:"큐브 업!",
        sourceURL:"https://jellinggame.com/Games/cubeup/index.html",
        mainUrl:"cubeup",
        thumbImage:"https://images.jellinggame.com/thumbImages/cubeup-thumb.png",
        introImage:"https://images.jellinggame.com/introImages/cubeup-intro.png",
        lang:"Eng",
        desc:`- It's a click-type game where you pile up cubes by clicking.\n
                - Click the moving box on time (you can press anywhere on the screen)`,
        descKor:`- 클릭 방식의 게임으로 움직이는 큐브를 클릭으로 쌓아가는 게임 입니다.\n
                - 움직이는 박스를 타이밍에 맞춰 클릭(화면 내 아무 곳이나 눌러도 됩니다.)`,
    },
    {
        title:"Dig Dig",
        titleKor:"디그디그",
        sourceURL:"https://jellinggame.com/Games/digdig/index.html",
        mainUrl:"digdig",
        thumbImage:"https://images.jellinggame.com/thumbImages/digdig-thumb.png",
        introImage:"https://images.jellinggame.com/introImages/digdig-intro.png",
        lang:"Eng",
        desc:`- It's a simple casual game using drag and click.\n
                - Dig the ground so that cute animals can reach their target point.`,
        descKor:`- 드래그와 클릭을 이용한 간단한 캐쥬얼 게임 입니다.\n
                - 땅을 파서 귀여운 동물을 목표지점으로 도달할 수 있게 합니다.`,
    },
    {
        title:"Don't Wake Up!",
        titleKor:"돈 웨이크 업!",
        sourceURL:"https://jellinggame.com/Games/dontwakeup/index.html",
        mainUrl:"dontwakeup",
        thumbImage:"https://images.jellinggame.com/thumbImages/dontwakeup-thumb.png",
        introImage:"https://images.jellinggame.com/introImages/dontwakeup-intro.png",
        lang:"Eng",
        desc:`- It's a clicker game, and the cat moves to the place you click.\n
                - If you move to the haunted side, the ghost will be removed.`,
        descKor:`- 클리커 게임으로, 클릭한 곳으로 고양이가 이동합니다.\n
                - 유령이 있는 쪽으로 이동되면 유령이 제거됩니다.`,
    },
    {
        title:"Drawing Parking",
        titleKor:"드로잉 파킹",
        sourceURL:"https://jellinggame.com/Games/drawingparking/index.html",
        mainUrl:"drawingparking",
        thumbImage:"https://images.jellinggame.com/thumbImages/drawingparking-thumb.png",
        introImage:"https://images.jellinggame.com/introImages/drawingparking-intro.png",
        lang:"Eng",
        desc:`- It's a game that you can enjoy with a simple drag.\n
                - It's a game where you park a car that fits each color in a parking area that fits the color.`,
        descKor:`- 간단한 드래그로 즐길 수 있는 게임입니다.\n
                - 각각 색상에 맞는 자동차를 색상에 맞는 주차구역에 파킹하게 만들면 되는 게임입니다.`,
    },
    {
        title:"Easy Golf 1",
        titleKor:"이지 골프 1",
        sourceURL:"https://jellinggame.com/Games/easygolf/index.html",
        mainUrl:"easygolf",
        thumbImage:"https://images.jellinggame.com/thumbImages/easygolf-thumb.png",
        introImage:"https://images.jellinggame.com/introImages/easygolf-intro.png",
        lang:"Eng",
        desc:`- It's a casual golf game that you can enjoy with a simple click.\n
                - A game in which a mouse is placed in the direction you want to swing, clicks, and puts the ball into the hole.`,
        descKor:`- 간단한 클릭으로 즐길 수 있는 캐쥬얼 골프 게임 입니다.\n
                - 스윙하고 싶은 방향에 마우스를 두고 클릭하며, 홀 안에 공을 넣는 게임.`,
    },
    {
        title:"Easy Golf 2",
        titleKor:"이지 골프 2",
        sourceURL:"https://jellinggame.com/Games/easygolf2/index.html",
        mainUrl:"easygolf2",
        thumbImage:"https://images.jellinggame.com/thumbImages/easygolf2-thumb.png",
        introImage:"https://images.jellinggame.com/introImages/easygolf2-intro.png",
        lang:"Eng",
        desc:`- It's a casual golf game that you can enjoy with a simple click.\n
            - A game in which a mouse is placed in the direction you want to swing, clicks, and puts the ball into the hole.`,
        descKor:`- 간단한 클릭으로 즐길 수 있는 캐쥬얼 골프 게임 입니다.\n
                - 스윙하고 싶은 방향에 마우스를 두고 클릭하며, 홀 안에 공을 넣는 게임.`,
    },
    {
        title:"Fruits Blender",
        titleKor:"후르츠블렌더",
        sourceURL:"https://jellinggame.com/Games/fruitsblender/index.html",
        mainUrl:"fruitblender",
        thumbImage:"https://images.jellinggame.com/thumbImages/fruitsblender-thumb.png",
        introImage:"https://images.jellinggame.com/introImages/fruitsblender-intro.png",
        lang:"Eng",
        desc:`- Casual that you can realize\n
                This game implements it.`,
        descKor:`- 간단한 클릭으로 즐길 수 있는 미니 캐쥬얼 게임\n
                나이프를 날려 과일을 썰어 주스를 만드는 게임 입니다.`,
    },
]

export default GAMES;