import React, {useState, useEffect} from 'react';
import pic1 from '../common/assets/img/ALGERIA.jpg'
import pic2 from '../common/assets/img/harambee.jpg'
// import ApiGet from '../config/axios'
// import URLS from '../config/settings'


const Article1 = ({props}) =>{

    const [client, setClient] = useState([])
    
    useEffect(() => {
        
    })


    return(
        <>
            <div className="article">
                <div className="articleImg">
                    <img src={pic1} alt="hero"/>
                </div>

                <h1 className="playfair-xlg align-center">Africa cup of Nations 2019, CAIRO, EGYPT: The Champions Group “C”;
A Kenyans’s Perspective.</h1>

                <span className="dateSpan block align-center playfair-m">July 24, 2019</span>
                
                <span className="subtitleSpan lato-m i align-center gold block mg-v-20">Typical of the Kenyan culture and politics, the Government had to recognize the team’s effort after qualifying through to represent the country at the Continental Stage. The government’s support was solidified by a three-week training camp in Paris, France and playing of two credible build up matches.</span>

                <div className="long-text">
                    <p>
                    It was the most anticipated African cup of Nations in Kenya as it had taken a solid 14
years since the “Harambee Stars” had qualified for the coveted Trophy. June 21 st 2019
was the kick off day with the Cup expected to run through to the 19 th day of July 2019.
The hosts kicked off the campaign with a one-nil win against Zimbabwe, the underdogs
of Group A. The other teams in the pool being Uganda and the Democratic Republic of
Congo.
<br/><br/>
Group C was arguably the “Group of death”, “The Stars” as they are commonly called
here in Kenya were in group C with the tournament’s favorites – Senegal, Algeria, the
eventual cup winners and Tanzania. The Stars’ first match was with the desert folks,
Algeria, at the 30 June Stadium. They came through as second runners up in their
qualifying Pool that included Ghana, thus boosting their Solid defensive record.
Typical of the Kenyan culture and politics, the Government had to recognize the team’s
effort after qualifying through to represent the country at the Continental Stage. The
government’s support was solidified by a three-week training camp in Paris, France and
playing of two credible build up matches. Which the Stars performed well.
23 rd June 2019, the lads come out to impress in the first match with a well fought match
ending in a two-nil (0-2) defeat to Algeria. The papers read “Out of sorts Harambee
Stars get reality check”. The Coach, Sebastian Migne is quoted to have stated “I accept
to lose but not in this way. Not the way we played in the first half”, signifying having
understood where the problem lies and making the necessary changes for the following
Group match against the East African rivals, “Taifa Stars” of Tanzania or could this be
misconstrued to signify the anger the stars might have faced in the changing rooms.
Be that as it may, the games proceeded well and in Group A, DR Congo lost two-nil to
Uganda, Zimbabwe and Uganda with a nil-nil draw, Egypt having a second win to top
Group A. Nigeria of Group B had a one-nil win over Burundi, Guinea and the
tournament’s newbies Madagascar sharing a point. Nigeria sealed their spot in the
round of 16 by getting a one nil win over Guinea. In Group D, the North Africans,
Morocco had a one-nil win over Namibia and Ivory Coast had beaten South Africa in a
thriller ending with a one- nil win to Ivory Coast. <br/> <br/>

“The battle of the Stars”, took place on the 27 th day of June with Harambee Stars
silencing their noisy neighbors, Taifa Stars, in a three-two (3-2) thriller. Accolades were
given to Kenya’s risen star Michael Olunga. Olunga gave Kenya a reason to believe
again in the match played at the 30 June Stadium. At the sixty-second (62 nd ) minute,
Johanna Omollo headed home from close range off Timbe’s cross to make it level for
the Stars. Olunga won it for Kenya with a powerful left shot. Just like that, the Harambee
Stars had crashed Tanzania’s dream of progressing to the Round of 16 and had opened
a spot for themselves were they to maintain a draw or win against the tournament’s
favorites Senegal, who had lost to Algeria one-nil (0-1). <br/><br/>

Algeria having qualified after their win against Kenya and Senegal, were left with a
chance to seal their qualification against Tanzania who had already been knocked out
after losing their two matches against Kenya and Senegal. The battle in the Group was
now between the tournament’s favorites against Harambee Stars - a team that had only
qualified after 14 years. Isn’t it impressive? Should we have expected more?
In the streets of Nairobi on 1 st July 2019, the most anticipated match of all was about to
be played. Would Kenya make it to the Round of 16 or will Senegal make it with Kenya
having a goal difference advantage? This signified that should the teams have drawn;
Kenya would have proceeded to the Round of 16. In essence therefore, this was a
match to prove the mental strength of the Senegalese and the resilience of Kenyans.
All hope was with the Stars but was this the real reality check for the Stars? A fully
motivated team was on the field. The team included P. Matasi, J. Okumu, A. Omar, M.
Musa, P. Otieno, M. Ayub, E. Omondi, F. Kahata, V. Wanyama, D. Omino, M. Olunga.
They played well and during the half time break the teams were stuck at a nil draw with
the Stars producing a solid defense, and “the magnificent” Patrick Matasi saving a
penalty from Mane of Liverpool FC and that going down as his moment of the
tournament. At half time, Matasi was the Man of the match having made magnificent
saves against Senegal and constantly frustrating the team’s efforts.<br/><br/>
In the second half, the team lost momentum and their staying power and the match
ended on a three-nil win for the Senegalese. In the other Groups: Egypt, Uganda and
DR Congo qualified from Group A; Madagascar, Nigeria and Guinea qualified from
Group B; Group D having Ivory Coast and Morocco; Mali and Tunisia from Group E;
and Ghana and Cameroon from group F all qualified for the Round of 16.<br/><br/>
In the quarter finals Senegal reached the Semi-Finals for the first time since 2006 with
Idrissa Gueye’s one-nil goal against Benin. Nigeria and Tunisia also qualified while
Algeria beat Ivory Coast in a four-three (4-3) post match penalties win after a one-one
draw during regular time. The two teams that had qualified against Kenya would
represent the Group in their alternate Semi Finals.<br/><br/>
Both teams performed well to beat their diverse opponents eventually qualifying for the
finals played on the 19 th day of July 2019 at the Cairo International Stadium. Algeria
confirmed there win against Senegal in the Group stage match with a one-nil win of a
goal in the 2 nd Minute of the game.<br/><br/>
It is therefore undoubtable that the Harambee Stars of Kenya were in a Pool of “death”
in the tournament and having lost the spot to qualify for the Round of 16 in the second
half of their last match shows the zeal and determination the team had at the
Continental tournament. Let us celebrate this small achievements Kenya attained. We
are proud of your efforts and hope for even better results going forward.
Congratulations are in order to the Desert Foxes for winning the Africa Cup of Nations,
2019 held in Cairo, Egypt. 
                    </p>
                </div>

            </div>
        </>
    )
}

export const Article2 = ({props}) =>{


    return(
        <>
            <div className="article">
                <div className="articleImg">
                    <img src={pic2} alt="hero"/>
                </div>

                <h1 className="playfair-xlg align-center">THE SPORTS ACT, NO. 25 OF 2013: REGISTRATION AND REGULATION OF SPORTS AND LICENCING; AN OVERVIEW</h1>

                <span className="dateSpan block align-center playfair-m">July 25, 2019</span>
                
                <span className="subtitleSpan lato-m i align-center gold block mg-v-20">Part VI of The Sports Act, No. 25 of 2013 (The Act), provides the substantive and procedural law for registration, regulation and licencing of sports activities in Kenya. The Act, Section 45, establishes the office of Sports Registrar (the Registrar) as an office under Public Service.

</span>

                <div className="long-text">
                <p>There is increase in the identification, nurturing and development of talents in Kenya. Sports is one of the fields of talent that have in the recent past highly developed and has seen many pupils, students and other persons join various fields of talent for leisure or career development.</p>
<p>Schools and the government have also not been left behind in these development. The Kenya Primary Schools Sports Association and the Kenya Secondary Schools Sports Association, both of which I have participated during my schooling days, have over the years provided a platform for young lads and lasses in Kenya to showcase and develop their talents. Those who put in hard work and determination have developed from this stage to earn themselves decent careers. In Collins Injera of the Kenya Rugby team, &ldquo;Shujaa&rdquo; and Victor Wanyama of the Kenya Football team, &ldquo;Harambee Stars&rdquo; are some of the players who have benefitted and developed decent careers from these programs.</p>
<p>Be that as it may, private companies and organisations have also not been left behind. Several talent development companies and organisations have been established in the recent past. However, as these events unfold, do the companies comply fully with the law? This article educates or informs the owners, managers and prospective entrepreneurs in the field of sports on how to register and what regulations one has to comply with before commencing business in the field of sports. Further, it makes some recommendation on what can be improved.</p>
<p>Part VI of The Sports Act, No. 25 of 2013 (The Act), provides the substantive and procedural law for registration, regulation and licencing of sports activities in Kenya. The Act, Section 45, establishes the office of Sports Registrar (the Registrar) as an office under Public Service. The registrar is an appointee of the Public Service Commission (PSC). The registrar is in charge of the Office of the Sports Registrar and is mandated to ensure registration and regulation of sports organisations and multi- sports bodies representing sports organisations at the national level. The office is responsible for licensing of professional sports and professional sports persons and arbitration of registration disputes between sports organisations. It is mandatory that the registrar keeps and maintains a register of the registered sports organisations and such other particulars relating to the registered sports organisations. The register is to be maintained in a prescribed form under the Act.</p>
<p>It is envisaged under Section 46 of the Act that, a body shall not operate as a sports organisation unless it is registered. The Registrar is mandated to register sports organisations as either a sports club, a county sports association or a national sports organisation. For an organisation to be registered, an application is made to the registrar in a prescribed form specifying the name of the sports organisation, the category under which it is to be registered, the office bearers of the applicant, the head office and postal address of the applicant, sources of funding, national and international affiliation and such other information as the Cabinet Secretary may prescribe. The application for registration shall be accompanied by a certified copy of the constitution of the applicant organisation with basic minimum provisions set out in the second schedule of the Act and prescribed fees.</p>
<p>A certificate shall be issued upon approval and such certificate shall be conclusive evidence of authority to operate throughout the country. However, the registrar may reject an application for registration of a body as a sports organisation if the registrar is satisfied that the proposed activities or procedures are not in the national interest or the body has given false information to secure registration. Any such rejected application shall be notified to the applicant in writing by the Registrar within fourteen days from the date of such rejection.</p>
<p>If approved and it is discovered later that the registration was out of an illegality, the registrar has the discretion to cancel such a certificate of registration issued if he is satisfied that such registration was procured through misrepresentation or nondisclosure of material facts; if there is a violation of terms or conditions attached to the certificate; or where the organisation violates the law. However, practice has it that before such cancellation, the registrar must notify the sports organisation of the intended cancellation citing valid reasons within 14 days from the date of the intended cancellation. The organisation shall not be condemned unheard in compliance with Article 47 of the Constitution of Kenya and the Fair Administrative Act.</p>
<p>In reading the Act, it is true to state that a lot is yet to happen in terms of regulation of this sector. For instance, can a company be formed with the objectives of such an organisations? As it stand nothing bars such a company from formation. In as much as the act states that Societies that had been formed prior to enactment of the Act shall automatically be registered under the Act, it is silent on whether it becomes illegal for registration of such society independent of provisions of the Act. Be that as it may, matters to do with management of these organisations have totally been ignored under the Act. Where do sports managers go rather what regulates these groups or persons? An amendment would be necessary in my view to provide for sports management regulations; or enactment of new law to carter for sports management Kenya is still on the path to ensuring talent is made into a career option for the young person&rsquo;s aspiring to achieve in the field of talent. In my view, if this field is tapped properly, it will create jobs and help in eradicating social ills in the society. We need to start talking and working towards ensuring, just like first world countries, talent becomes a decent career choice. I believe if talent is empowered by enabling it be one of the career choices for our children and youth, we shall witness positive changes in society.&nbsp;</p>
<p><strong>MUNASE MUKHOMBWA</strong><br /><strong>FOUNDER/CEO</strong><br /><strong>MOTION TALENT AFRICA</strong></p>
                </div>

            </div>
        </>
    )
}

export default Article1