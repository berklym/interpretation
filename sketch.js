function setup() {

	createCanvas(700, 500)
	angleMode(DEGREES)
fill(0,0,139)
rect(0, 0, 650, 450)

//big moon
noStroke()
fill(249, 227, 87, 200)
ellipse(563, 80, 180, 180)

noStroke()
fill(255, 215, 0)
ellipse(563, 80, 150, 150)

noStroke()
fill(255, 165, 0)
ellipse(563, 80, 100, 100,)

noStroke()
fill(255, 215, 0)
ellipse (580, 80, 70, 70)

// star 1
noStroke()
fill(250, 236, 145, 200)
ellipse(400, 80, 40, 40)

noStroke()
fill(255, 215,0)
ellipse(400, 80, 20, 20)

// star 2
noStroke()
fill(255, 165, 0, 200)
ellipse(345, 25, 45, 45)

noStroke()
fill(255, 215, 0)
ellipse(345, 25, 25, 25)

noStroke()
fill(255, 165, 0, 200)
ellipse(345, 25, 35, 35)

noStroke()
fill(255, 215, 0)
ellipse(345, 25, 25, 25)

// star 3
noStroke()
fill(250, 236, 145, 200)
ellipse(208, 27, 30, 30)

noStroke()
fill(255, 165, 0)
ellipse(208, 27, 15, 15)

noStroke()
fill(255, 127, 80)
ellipse(208, 27, 5, 5)

//star 4
noStroke()
fill(255, 165, 0, 200)
ellipse(159, 15, 35, 35)

noStroke()
fill(255, 215, 0)
ellipse(159, 15, 10, 10)

// star 5
noStroke()
fill(250, 235, 161, 200)
ellipse (148, 68, 40, 40)

noStroke()
fill(252, 227, 102, 250)
ellipse (148, 68, 30, 30)

noStroke()
fill(246, 186, 46)
ellipse(148, 68, 5, 5)

// star 6
noStroke()
fill(247, 239, 187, 200)
ellipse(35, 19, 45, 45)

noStroke()
fill(246, 228, 111)
ellipse (35, 19, 25, 25)

noStroke()
fill(255, 160, 122)
ellipse (35, 19, 7, 7)

//star 7
noStroke()
fill(247, 239, 187, 170)
ellipse(169, 146, 25, 25)

noStroke()
fill(247, 210, 87)
ellipse(169, 146, 15, 15)

noStroke()
fill(255, 160, 122)
ellipse(169, 146, 10, 10)

//star 8
noStroke()
fill(250, 250, 210, 250)
ellipse(209, 237, 70, 70)

noStroke()
fill(255, 215, 0)
ellipse (209, 237, 20, 20)

noStroke()
fill(250, 128, 114)
ellipse(209, 237, 10, 10)

//star 9
noStroke()
fill(250, 236, 145, 200)
ellipse(65, 180, 40, 40)

noStroke()
fill(255, 215,0)
ellipse(65, 180, 20, 20)

noStroke()
fill(255, 160, 122)
ellipse (65, 180, 7, 7)

//star 10
noStroke()
fill(250, 236, 145, 200)
ellipse(11, 165, 30, 30)

noStroke()
fill(255, 165, 0)
ellipse(11, 165, 15, 15)

// grassy hills
fill(34, 139, 34)
stroke(0, 100, 0)
strokeWeight(5)
beginShape()
	vertex(0, 434)
	vertex(0, 355)
	vertex(25, 361)
	vertex(56, 358)
	vertex(80, 357)
	vertex(268, 350)
	vertex(311, 343)
	vertex(355, 330)
	vertex(415, 328)
	vertex(482, 339)
	vertex(535, 339)
	vertex(598, 326)
	vertex(650, 323)
	vertex(650, 433)
endShape()	

fill(0, 100, 0)
beginShape()
	vertex(0, 434)
	vertex(36, 399)
	vertex(65, 395)
	vertex(80, 395)
	vertex(83, 416)
	vertex(89, 433)
endShape()	

//hoouse
stroke(112, 93, 30)
fill(112, 93, 30)
strokeWeight(2)
beginShape()
	vertex(359, 398)
	vertex(359, 371)
	vertex(393, 371)
	vertex(393, 399)
endShape()	

//roof house
fill(70, 58, 19)
beginShape()
	vertex(345, 371)
	vertex(377, 350)
 	vertex(402, 371)
endShape()

// house replicated
push()
translate(50, 10)
stroke(112, 93, 30)
fill(112, 93, 30)
strokeWeight(2)
beginShape()
	vertex(359, 398)
	vertex(359, 371)
	vertex(393, 371)
	vertex(393, 399)
endShape()	

fill(70, 58, 19)
beginShape()
	vertex(345, 371)
	vertex(377, 350)
 	vertex(402, 371)
endShape()
pop()

// house replicated
push()
translate(100, 20)
stroke(112, 93, 30)
fill(112, 93, 30)
strokeWeight(2)
beginShape()
	vertex(359, 398)
	vertex(359, 371)
	vertex(393, 371)
	vertex(393, 399)
endShape()	

fill(70, 58, 19)
beginShape()
	vertex(345, 371)
	vertex(377, 350)
 	vertex(402, 371)
endShape()
pop()




fill(107, 142, 35)
noStroke()
beginShape()
	vertex(276, 434)
	vertex(288, 410)
	vertex(306, 391)
	vertex(347, 387)
	vertex(376, 399)
	vertex(395, 413)
	vertex(419, 419)
	vertex(440, 433)
endShape()



noStroke()



noFill()
// bottom shape
beginShape()
	curveVertex(0, 337)
	curveVertex(0, 337)
	curveVertex(46, 343)
	curveVertex(97, 328)
	curveVertex(125, 335)
	curveVertex(191, 341)
	curveVertex(209, 330)
	curveVertex(233, 318)
	curveVertex(258, 316)
	curveVertex(270, 321)
	curveVertex(272, 327)
	curveVertex(287, 321)
	curveVertex(340, 292)
	curveVertex(359, 286)
	curveVertex(383, 284)
	curveVertex(384, 285)
	curveVertex(426, 308)
	curveVertex(426, 308)

	curveVertex(426, 308)
	curveVertex(442, 304)
	curveVertex(463, 301)
	curveVertex(485, 299)
	curveVertex(499, 299)
	curveVertex(516, 300)
	curveVertex(533, 304)
	curveVertex(548, 293)
	curveVertex(572, 276)
	curveVertex(598, 267)
	curveVertex(633, 265)
	curveVertex(653, 266)
	curveVertex(653, 266)
endShape()


// swirly in sky
noFill()
fill(173,216,230)
beginShape()
	curveVertex(0, 172)
	curveVertex(0, 172)
	curveVertex(0, 80)
	curveVertex(13, 86)
	curveVertex(28, 94)
	curveVertex(49, 106)
	curveVertex(68, 112)
	curveVertex(88, 112)
	curveVertex(107, 113)
	curveVertex(136, 107)
	curveVertex(159, 97)
	curveVertex(182, 83)
	curveVertex(201, 68)
	curveVertex(224, 55)
	curveVertex(256, 47)
	curveVertex(291, 47)
	curveVertex(318, 52)
	curveVertex(335, 64)
	curveVertex(350, 80)
	curveVertex(357, 99)
	curveVertex(358, 118)
	curveVertex(353, 139)
	curveVertex(345, 154)
	curveVertex(327, 162)
	curveVertex(300, 162)
	curveVertex(282, 153)
	curveVertex(267, 142)
	curveVertex(251, 131)
	curveVertex(232, 124)
	curveVertex(212, 125)
	curveVertex(191, 131)
	curveVertex(161, 141)
	curveVertex(142, 149)
	curveVertex(94, 160)
	curveVertex(71, 161)
	curveVertex(42, 156)
	curveVertex(17, 152)
	curveVertex(0, 151)
	curveVertex(0, 151)
endShape()

beginShape()
	curveVertex(277, 154)
	curveVertex(277, 154)
	curveVertex(263, 145)
	curveVertex(249, 135)
	curveVertex(232, 130)
	curveVertex(215, 130)
	curveVertex(199, 133)
	curveVertex(187, 139)
	curveVertex(181, 149)
	curveVertex(179, 163)
	curveVertex(183, 175)
	curveVertex(193, 189)
	curveVertex(200, 202)
	curveVertex(209, 211)
	curveVertex(216, 219)
	curveVertex(232, 226)
	curveVertex(258, 227)
	curveVertex(286, 223)
	curveVertex(312, 215)
	curveVertex(332, 205)
	curveVertex(351, 189)
	curveVertex(367, 177)
	curveVertex(386, 164)
	curveVertex(406, 157)
	curveVertex(423, 153)
	curveVertex(439, 152)
	curveVertex(448, 155)
	curveVertex(453, 160)
	curveVertex(457, 165)
	curveVertex(460, 173)
	curveVertex(460, 175)
	curveVertex(457, 183)
	curveVertex(446, 187)
	curveVertex(432, 184)
	curveVertex(422, 178)
	curveVertex(412, 179)
	curveVertex(407, 183)
	curveVertex(410, 190)
	curveVertex(421, 195)
	curveVertex(441, 201)
	curveVertex(461, 198)
	curveVertex(474, 189)
	curveVertex(483, 175)
	curveVertex(486, 150)
	curveVertex(476, 132)
	curveVertex(458, 122)
	curveVertex(436, 117)
	curveVertex(414, 118)
	curveVertex(393, 124)
	curveVertex(373, 134)
	curveVertex(357, 144)
	curveVertex(348, 153)
	curveVertex(339, 160)
	curveVertex(324, 164)
	curveVertex(309, 163)
	curveVertex(301, 163)
	curveVertex(284, 157)
	curveVertex(277, 154)
	curveVertex(277, 154)
endShape()





// green bush
fill(85,107,47)
beginShape()
	curveVertex(104, 450)
	curveVertex(104, 450)
	curveVertex(88, 430)
	curveVertex(84, 416)
	curveVertex(79, 398)
	curveVertex(78, 373)
	curveVertex(84, 342)
	curveVertex(94, 328)
	curveVertex(96, 312)
	curveVertex(84, 269)
	curveVertex(82, 241)
	curveVertex(87, 210)
	curveVertex(87, 184)
	curveVertex(80, 152)
	curveVertex(82, 137)
	curveVertex(82, 150)
	curveVertex(88, 165)
	curveVertex(92, 175)
	curveVertex(92, 175)
	curveVertex(101, 157)
	curveVertex(102, 138)
	curveVertex(104, 125)
	curveVertex(106, 130)
	curveVertex(106, 134)
	curveVertex(108, 137)
	curveVertex(113, 125)
	curveVertex(113, 108)
	curveVertex(107, 92)
	curveVertex(100, 79)
	curveVertex(96, 60)
	curveVertex(96, 39)
	curveVertex(98, 22)
	curveVertex(100, 11)
	curveVertex(97, 1)
	curveVertex(102, 8)
	curveVertex(102, 12)
	curveVertex(100, 24)
	curveVertex(99, 36)
	curveVertex(102, 48)
	curveVertex(106, 65)
	curveVertex(119, 81)
	curveVertex(128, 95)
	curveVertex(133, 120)
	curveVertex(133, 157)
	curveVertex(132, 177)
	curveVertex(137, 164)
	curveVertex(139, 151)
	curveVertex(141, 139)
	curveVertex(142, 147)
	curveVertex(142, 154)
	curveVertex(141, 162)
	curveVertex(138, 171)
	curveVertex(137, 179)
	curveVertex(140, 196)
	curveVertex(144, 215)
	curveVertex(147, 235)
	curveVertex(150, 259)
	curveVertex(150, 276)
	curveVertex(154, 266)
	curveVertex(155, 251)
	curveVertex(158, 238)
	curveVertex(162, 225)
	curveVertex(167, 219)
	curveVertex(164, 227)
	curveVertex(163, 237)
	curveVertex(163, 245)
	curveVertex(161, 261)
	curveVertex(160, 276)
	curveVertex(158, 286)
	curveVertex(163, 293)
	curveVertex(173, 307)
	curveVertex(184, 320)
	curveVertex(190, 332)

	curveVertex(193, 340)
	curveVertex(190, 318)
	curveVertex(183, 305)
	curveVertex(178, 292)
	curveVertex(175, 274)
	curveVertex(176, 254)
	curveVertex(184, 235)
	curveVertex(190, 218)
	curveVertex(192, 203)
	curveVertex(194, 216)
	curveVertex(194, 226)
	curveVertex(193, 239)
	curveVertex(195, 254)
	curveVertex(203, 271)
	curveVertex(215, 290)
	curveVertex(226, 306)
	curveVertex(228, 319)
	curveVertex(230, 338)
	curveVertex(236, 354)
	curveVertex(240, 368)
	

	curveVertex(241, 385)
	curveVertex(245, 366)
	curveVertex(244, 351)
	curveVertex(247, 329)
	curveVertex(250, 319)
	curveVertex(251, 326)
	curveVertex(250, 335)
	curveVertex(252, 347)
	curveVertex(260, 361)
	curveVertex(268, 377)
	curveVertex(272, 397)
	curveVertex(269, 416)
	curveVertex(265, 450)
	curveVertex(265, 450)
endShape()

// light blue steak above hills
noFill()
fill(176,196,222)
beginShape()
	curveVertex(0, 337)
	curveVertex(0, 337)
	curveVertex(0, 279)
	curveVertex(0, 279)
	curveVertex(15, 268)
	curveVertex(38, 256)
	curveVertex(59, 257)
	curveVertex(70, 268)
	curveVertex(80, 280)
	curveVertex(87, 283)
	curveVertex(91, 298)
	curveVertex(94, 306)
	curveVertex(96, 316)
	curveVertex(97, 317)
	curveVertex(95, 324)
	curveVertex(93, 329)
	curveVertex(81, 332)
	curveVertex(70, 337)
	curveVertex(50, 341)
	curveVertex(36, 342)
	curveVertex(35, 342)
	curveVertex(35, 342)
endShape()

	
beginShape()
	curveVertex(233, 318)
	curveVertex(233, 318)
	curveVertex(258, 316)
	curveVertex(270, 321)
	curveVertex(272, 327)
	curveVertex(287, 321)
	curveVertex(340, 292)
	curveVertex(359, 286)
	curveVertex(383, 284)
	curveVertex(384, 285)
	curveVertex(426, 308)
	curveVertex(426, 308)

	curveVertex(426, 308)
	curveVertex(442, 304)
	curveVertex(463, 301)
	curveVertex(485, 299)
	curveVertex(499, 299)
	curveVertex(516, 300)
	curveVertex(533, 304)
	curveVertex(548, 293)
	curveVertex(572, 276)
	curveVertex(598, 267)
	curveVertex(633, 265)
	curveVertex(650, 266)
	curveVertex(650, 266)
	
	curveVertex(650, 182)
	curveVertex(609, 178)
	curveVertex(577, 179)
	curveVertex(556, 184)
	curveVertex(532, 188)
	curveVertex(503, 186)
	curveVertex(488, 188)
	curveVertex(478, 195)
	curveVertex(459, 212)
	curveVertex(437, 230)
	curveVertex(412, 248)
	curveVertex(393, 254)
	curveVertex(365, 254)
	curveVertex(334, 255)
	curveVertex(308, 260)
	curveVertex(262, 265)
	curveVertex(223, 267)
	curveVertex(202, 271)
	curveVertex(226, 307)
	curveVertex(227, 319)
	curveVertex(227, 319)
endShape()





























/*rotate(-25)

beginShape()
	curveVertex(79, 191)
	curveVertex(79, 191)
	curveVertex(83, 39)
	curveVertex(182, 43)
	curveVertex(179, 105)
	curveVertex(94, 105)
	curveVertex(176, 124)
	curveVertex(175, 189)
	curveVertex(79, 191)
	curveVertex(79, 191)
endShape()


rotate(25)

push()
translate(100, 0)
beginShape()



noFill()
rect(0, 0, width, height)*/
	




	// comment the strokeweight changes the thickness of the lines
	//nostroke gets rid of the outside line
	 //this will set the setting of using degress instead of radius
	// the fourth variable is the opacity of the color
	// arc can make a fraction of a circle, the last two numbers are the degrees at which the arc starts and stops
	
	print("this is to leave comments to youself that show up in the consol")
}


// this will show you the coordinates of any point on the canvas that you click on
function mouseClicked() {
	print(int(mouseX), int(mouseY))

}