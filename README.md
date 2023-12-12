# Hvar Er Tónlist? - Héðinn, Szymon og Þorgeir
## VEFÞ3VÞ05DU
Stack: MongoDB, Express.js, React, Node.js, Firebase <br> <br>
Við ætlum að gera app sem sýnir tónlistaviðburði í Íslandi. Notandi getur búið til account og skráð sig inn, skráð gögn um sig og fengið meðmælingar um viðburði, fundið tónleika sem hann hefur áhuga, séð hvaða- og hverskonar fólk eru að mæta á viðburði, og líka skráð sína eigin tónleika inn á vefsíðuna. Það verður síunarkerfi, og hægt verður að leita að viðburðum eftir leitarorði, dagsetningu, tónlistartegund, miðaverði, og staðsetningu.

Figma:
![alt text](https://github.com/SHTh-App23/HvarErTonlist/blob/main/Myndir/Screenshot%20(4).png) 

### [Figma link](https://www.figma.com/file/hmLHLiqnaKfYWJ4Ctm8CTS/HvarErTonlist?type=design&node-id=0%3A1&mode=design&t=2xE4WipAldwKl2Tm-1) <br>
### [Myndir af wireflow](wireflow.md) <br>
### [Screenshots](screenshots.md) <br>
### [Linkur á YouTube video](https://youtu.be/lGtoa6gp_d0) <br>
### [Data i json formi](https://github.com/SHTh-App23/HvarErTonlist/blob/main/data%20(1).json) <br>

Gagnagrunnur: <br>
Við notuðum mongoDB til að halda utan um usera og eventa. Myndirnar (profile pic og event picture) eru á firebase. Public linkur sem Firebase býr til fyrir myndina er settur í imageUrl og þannig notar appið linkinn sem source til að birta rétta mynd. Þegar notandi ýtir á takka á viðburði sem hann hefur áhuga á er id hans sett í array af interested users á viðburðinum í mongoDB 
<img width="696" alt="Screenshot 2023-12-11 at 12 10 56" src="https://github.com/SHTh-App23/HvarErTonlist/assets/89400863/605d1f5d-e900-41dd-a5b2-379df8ccfdbe">
<img width="954" alt="Screenshot 2023-12-11 at 12 15 22" src="https://github.com/SHTh-App23/HvarErTonlist/assets/89400863/cdfa4bd2-b7db-4b58-b20b-0341e3d9be70">
<img width="837" alt="Screenshot 2023-12-11 at 12 20 04" src="https://github.com/SHTh-App23/HvarErTonlist/assets/89400863/5f84354b-267a-4c01-8dbc-7bdb87cd7959">
