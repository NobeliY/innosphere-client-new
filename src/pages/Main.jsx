import React, { useEffect, useState } from 'react';
import '../styles/main.scss'

import location from '../assets/images/location.png'
import phone from '../assets/images/phone.png'

import kids1 from '../assets/images/kids1.jpg'
//import kids2 from '../assets/images/kids2.jpg'
//import kids3 from '../assets/images/kids3.jpg'
// eslint-disable-next-line
// import kids from '../assets/images/kidsMain.jpeg'
import director from '../assets/images/director.jpg'

import arrowL from '../assets/images/arrLeft.png'
import arrowR from '../assets/images/arrRight.png'
import {fetchImages, fetchRates, fetchServices} from "../http/innoAPI";

const Main = () => {
    const [services, setServices] = useState(null)
    const [rates, setRates] = useState(null)
    const [gallery, setGallery] = useState(null)
    const [photoNum, setPhotoNum] = useState(0)

    useEffect(() => {
        fetchServices().then(data => {
            setServices(data)
        })
        fetchRates().then(data => {
            setRates(data)
        })
        fetchImages().then(data => {
            setGallery(data)
        })
//        setServices([
//            { name: 'Занятия с Логопедом / Нейрологопедом / Дефектологом', text: 'Сотрудничество с нейрологопедом позволяет найти причины речевых нарушений и уменьшить их симптомы благодаря регулярным речевым тренировкам.' },
//            { name: 'Занятия с Нейропедагогом / Нейропсихологом', text: 'Ваш ребёнок не успевает хронически? Много двоек? Плохо читает, пишет, невнимателен и рассеян?\nОн проявляет агрессию или апатию?\nЭто не говорит о том, что ребёнок не хочет учиться!\n- Ему на самом деле тяжело учиться из - за проблем нейропсихологического  характера.\nТак вот - Если в этом тексте вы узнали вашего ребенка, то  Вам нужен не репетитор, а специалист ПЕДАГОГ - НЕЙРОПСИХОЛОГ, который, сможет определить проблему и заниматься коррекцией его здоровья, памяти, логики, внимания, в том числе дислексии, дисграфии, дискалькулии и  естественно поможет с учёбой.' },
//            { name: 'Занятия с Нейропсихологом', text: 'Специалист работает и с различными нарушениями внимания, концентрации, проблемами в эмоционально-волевой сфере, дисграфией, дислексией и другими отклонениями. При проведении работы с детьми, клинический психолог диагностирует уровень сформировавшихся психических функций. При помощи специальных методик, врач выявляет области мозга, которые неудовлетворительно выполняют свои функции, после чего составляет план коррекции. Во время курса ребенок будет чувствовать себя максимально комфортно, ведь занятия проводятся в игровой форме.' },
//            { name: 'Занятия с  Тьютором', text: 'Специалист, который исследует интересы и создаёт среду для развития ребёнка. Он ориентируется не на потребности учебной программы или образовательного стандарта, а на потребности учащегося. При этом тьютор старается привести его познавательные запросы в гармонию с интересами и возможностями семьи.' },
//            { name: 'Хореография', text: 'Занятия хореографией способствуют развитию всего организма – физического и психического (концентрации воли, внимания, восприятия, мышления, памяти, уравновешенности процессов), ребенок учится владеть своим телом, лучше ориентируется в пространстве, улучшается координация движений.' },
//            { name: 'Говорим на английском', text: 'Изучающие язык дети становятся более общительными, открытыми, потому что перестают бояться сделать что-то неправильно. Это помогает им стать более уверенными в своих силах, умение ставить перед собой цели и достигать их пригодится в будущем, когда дети станут взрослыми. Английский поможет найти престижную работу, даст возможность получать новую информацию из интернета или реальной жизни, встречаться и общаться с совершенно разными людьми.' },
//            { name: 'Творческая мастерская выходного дня с нейроразвитием', text: 'Всё, что нас окружает в социуме, «…всё решительно, что сделано рукой человека, - всё это является продуктом человеческого воображения и творчества». Развитие творческих способностей является одной из важнейших задач эстетического воспитания в коррекционной школе, это «процесс целенаправленного формирования умений замечать, адекватно воспринимать, правильно понимать, верно оценивать прекрасное в природе, искусстве и обществе, а также развитие стремления и способности создавать красивое».' },
//            { name: 'Мозжечковая стимуляция', text: 'Мозжечковая стимуляция — это комплекс физических упражнений, направленных на развитие участков мозга, отвечающих за формирование речи, поведения ребенка.\nЦель таких упражнений – научить мозг правильно обрабатывать информацию, полученную от органов чувств, улучшить навыки речи, письма рукой, развить навыки чтения, концентрацию внимания, математические навыки, стимулировать развитие памяти и понимание.' },
//            { name: 'Транслингвальная стимуляция', text: 'Транслингвальная стимуляция. Транслингвальная стимуляция - процедура, представляющая собой одновременное проведение электростимуляции специальным электродом, который накладывается на верхнюю поверхность языка и выполнение комплекса упражнений, направленных на обучение новым двигательным навыкам или восстановление утраченных точно координируемых движений. Мы работаем с ОНР, ЗПР, ЗРР, ОВЗ, РАС, речевыми нарушениями, нарушениями координированных движений (атаксия, дистония и др.) В чем состоит суть метода? Язык – это орган, имеющий наибольшую плотность рецепторов. В основном это рецепторы вкусовой чувственности (ветвь лицевого нерва) и общей чувствительности (ветвь тройничного нерва).' },
//            { name: 'Занятия по АВА-терапии', text: 'АBA-терапия – это прежде всего прикладная наука, в центре внимания которой, как мы видим уже из названия, находится поведение человека. Прикладной анализ поведения имеет множество применений, но большая часть АBA-специалистов работают в области формирования навыков и коррекции проблемного поведения людей с аутизмом. ... Занятия по коррекции поведения с использованием методов дефектологии и АВА-терапии. В нашей практике бывает так, что специалисты на нейропсихологической или дефектологической диагностике выявляют нарушения поведения у ребенка, которые на данном этапе не дадут эффективно проводить работу по развитию речи или когнитивных функций.' },
//            { name: 'Обще-физическая подготовка для малышей с проблемами мышечного тонуса', text: 'Любое отклонение от оптимального тонуса (гипо- или гипертонус) может являться как причиной, так и следствием возникших изменений в соматическом, эмоциональном, познавательном статусе ребенка и негативно сказываться на общем его развитии. Нормализовать мышечный тонус поможет лечебный и логопедический массаж. Очень важно научить ребенка контролировать свой мышечный тонус, снимать зажимы, самостоятельно расслабляться. В этом могут помочь детские психологи, логопеды, дефектологи, специалисты ЛФК, опытные физинструкторы' },
//            { name: 'IT-развитие', text: 'IT-технологии и робототехника сегодня приобретают все большую популярность, и нет ничего удивительного в том, что азы программирования дети начинают изучать уже в дошкольном возрасте. Это полезно для общего развития, а еще готовит ребенка к миру, где технологии играют ключевую роль.' },
//        ])
//        setRates([
//            { date: '25 февраля 2020 г.', name: 'Екатерина, мама Арсения', text: 'Выражаю огромную благодарность вашему Центру. Здесь всегда приятная атмосфера, чистота и хорошие условия. Очень нравится работа администраторов. Огромное спасибо нашим специалистам - Ксандопуло Елене Анатольевне и Мацур Василию Петровичу.\nРебенок идет на занятия с удовольствием. ЛФК проходит весело, с элементами игры, с хорошей физической нагрузкой. АВА - лучшие занятия за всю нашу жизнь. Елена Анатольевна очень грамотно занимается, все время занятий ребенок активно вовлечен (что для нас чудо). Дает ценные советы, как психолог. А наши новые групповые занятия просто бомбические!' },
//            { date: '25 февраля 2020 г.', name: 'Владимир, папа Матвея', text: 'Хотели бы выразить благодарность всему коллективу Центра "Инносфера". С удовольствием продолжим посещать занятия.' }
//        ])
//        setGallery([
//            { link: kids1, text: 'Говорим на английском' },
//            { link: kids2, text: 'Творческая мастерская выходного дня с нейроразвитием' },
//            { link: kids3, text: 'IT-развитие' },
//        ])
    }, [])

    const textSplit = (text) => {
        return text.split('\n')
    }

    const photoNext = () => {
        if (photoNum < gallery.length - 1) {
            setPhotoNum(photoNum + 1)
        } else {
            setPhotoNum(0)
        }
    }

    const photoPrev = () => {
        if (photoNum > 0) {
            setPhotoNum(photoNum - 1)
        } else {
            setPhotoNum(gallery.length - 1)
        }
    }

    const showModal = () => {
        document.querySelector('.FeedbackModal').classList.remove('None')
    }

    return (
        <section className='ContentContainer'>
            <div className='MainTop'>
                <h1 className='MainSub'>Научно-развивающий центр «Инносфера»</h1>
                <div className='MainContacts'>
                    <div className='MContact'>
                        <img src={location} alt="Локация" />
                        <p>г. Альметьевск, ул. Белоглазова 20</p>
                    </div>
                    <div className="MContact">
                        <img src={phone} alt="Телефон" />
                        <p>+7 (987) 229-72-05</p>
                    </div>
                </div>
            </div>
            <div className='MainPhotoContainer'>
                <div className='MainPhoto'>
                    <img src={kids1} alt="" />
                </div>
                <div className='MainInfo'>
                    <h3>Научно-развивающий центр</h3>
                    <ul>
                        <li>Для детей от 2 лет</li>
                        <li>Индивидуальные и групповые развивающие занятия</li>
                        <li>Интенсивы</li>
                        <li>Конкурсы</li>
                        <li>Нейрошколы</li>
                    </ul>
                    <button onClick={showModal}>Получить консультацию</button>
                </div>
            </div>
            <div className='MainPhotoContainer2'>
                <div className='MainInfo2'>
                    <h3>Научно-развивающий центр</h3>
                    <ul>
                        <li>Для детей от 2 лет</li>
                        <li>Индивидуальные и групповые развивающие занятия</li>
                        <li>Интенсивы</li>
                        <li>Конкурсы</li>
                        <li>Нейрошколы</li>
                    </ul>
                    <button onClick={showModal}>Получить консультацию</button>
                </div>
                <div className='MainPhoto2'>
                    <img src={kids1} alt="" />
                </div>
            </div>
            <div className='MainDirector'>
                <h3>Мартынова Гульнур Гараевна</h3>
                <div className='DirectorInfo'>
                    <div className='DirectorPhoto'>
                        <img src={director} alt="" />
                    </div>
                    <div className='DirectorText'>
                        <p>Дорогие посетители нашего сайта, добро пожаловать в развивающий центр "Инносфера"! Мы осознаем, как трудно найти надежных специалистов для работы с неговорящими детьми, детьми с ОВЗ, РАС, ОНР, ЗПР и аналогичными особенностями. Именно поэтому мы приглашаем вас познакомиться с нашим центром, основанным на принципах нейропсихологии, нейропедагогики, логопедии, дефектологии и психологии.</p>
                        <p>Наши специалисты готовы предложить свои услуги в помощь для Вас и ваших детей с нестандартными подходами и авторскими программами для каждого ребёнка. Наша команда специалистов горит искренним интересом к своей профессии и всегда стремится к самосовершенствованию.</p>
                        <p>Мы рады вам предложить нашу экспертизу и поддержку. Ждем с нетерпением возможности помочь вам и вашим детям на их пути к развитию и самореализации.</p>
                    </div>
                </div>
            </div>
            <div className='MainServices'>
                <h2>Наши услуги</h2>
                {services ?
                    <div className='ServicesContainer'>
                        {services.map((service, i) => {
                            return (
                                <div key={i} className='ServiceCard'>
                                    <div className='ServiceContent'>
                                        <h3>{i + 1}. {service.name}</h3>
                                        {textSplit(service.text).map((text, j) => {
                                            return (
                                                <p key={j}>{text}</p>
                                            )
                                        })}
                                    </div>
                                    <button onClick={showModal}>Связаться с нами</button>
                                </div>
                            )
                        })}
                    </div>
                    :
                    <div className='LoaderBox'>
                        <span className="Loader"></span>
                    </div>
                }
            </div>
            <div className='MainTeam'>
                <h2>Для вас работает команда профессионалов</h2>
                <p>В нашем центре работают специалисты , опыт и квалификация которых, позволяет грамотно и целенаправленно, в комплексном подходе с лучшими нейропедагогическими , научно-доказанными методами развивать наших детей. Мы предлагаем не просто методы, важные для психолого-педагогической системы в обучении, воспитании и развитии современных детей, а инновационную, т.е. технологии, которые действительно преобразуют педагогический процесс, где используются новшества наших новаторов, направленных на совершенствование образовательного и воспитательного процесса. В отобранных нами методиках присутствует мотивация, развитие креативности, эмоционального интеллекта, и самое главное, стремление к самосовершенствованию и успеху.</p>
            </div>
            <div className='MainParents'>
                <h2>К нам обращаются за помощью родители детей</h2>
                <h2 className='MB0'>от 2 до 7 лет с:</h2>
                <p>• &nbsp; детским аутизмом, атипичным аутизмом, синдромом Аспергера, другими дезинтегративными расстройствами и общими расстройствами развития;</p>
                <p>ОНР различного уровня развития (моторная алалия, сенсорная алалия, различные формы дизартрии);</p>
                <p>• &nbsp; нарушением интеллектуального развития (умственная отсталость);</p>
                <p>• &nbsp; задержкой психического развития (ЗПР);</p>
                <p>• &nbsp; задержкой речевого развития (ЗРР);</p>
                <p>• &nbsp; нарушением пищевого поведения (отказ от твердой пищи, трудности с жеванием и глотанием, рвотный рефлекс на твердую и/или холодную пищу);</p>
                <p>• &nbsp; первазивными нарушениями развития в результате различных метаболических синдромов;</p>
                <p>• &nbsp; гинетическими синдромами;</p>
                <p>• &nbsp; ДЦП;</p>
                <p>• &nbsp; СДВГ;</p>
                <p>• &nbsp; афазии;</p>
                <p>• &nbsp; дислалии;</p>
                <p>• &nbsp; дисграфии и дислексии;</p>
                <p>• &nbsp; нарушением звукопроизношения;</p>
                <p>• &nbsp; заиканием;</p>
                <p>• &nbsp; нарушением памяти и концентрации внимания, успеваемости в школе;</p>
                <p>• &nbsp; с нарушениями физического развития (мелкая и крупная моторика, ловкость, ритмичность, координация движений);</p>
                <p>• &nbsp; нарушениями обработки сенсорной информации.</p>
                <h2 className='MT30'>от 7 до 14 лет:</h2>
                <p>• &nbsp; дети с ОВЗ;</p>
                <p>• &nbsp; дети с ментальными нарушениями;</p>
                <p>• &nbsp; дети, отстающие в учебе;</p>
                <p>• &nbsp; социально-не адаптированные;</p>
                <p>• &nbsp; дети с ДЦП, со слабо-мышечной активностью.</p>
            </div>
            <div className='MainRates'>
                <h2>Отзывы родителей</h2>
                {rates ?
                    <div className='RatesContainer'>
                        {rates.map((rate, i) => {
                            return (
                                <div key={i} className='RateCard'>
                                    <div className='RateContent'>
                                        <h5>{rate.date}</h5>
                                        <h3>{rate.name}</h3>
                                        {textSplit(rate.text).map((text, j) => {
                                            return (
                                                <p key={j}>{text}</p>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    :
                    <div className='LoaderBox'>
                        <span className="Loader"></span>
                    </div>
                }
            </div>
            <div id='photogallery' style={{ width: '100%' }}>
                <div className='MainGallery'>
                    <h2>Фотогалерея</h2>
                    {gallery ?
                        <div className='GalleryContainer'>
                            {gallery.map((photo, i) => {
                                if (i === photoNum)
                                    return (
                                        <div className='GalleryPhoto' key={i}>
                                            <div className='PhotoSlider'>
                                                <button className='PhotoArrow ArrLeft' onClick={photoPrev}>
                                                    <img src={arrowL} alt="Назад" />
                                                </button>
                                                <div className='PhotoBox'>
                                                    <img src={`${process.env.REACT_APP_API_URL + photo.name}`} alt="Фотогалерея" />
                                                </div>
                                                <button className='PhotoArrow ArrRight' onClick={photoNext}>
                                                    <img src={arrowR} alt="Вперед" />
                                                </button>
                                            </div>
                                            <p>{photo.text}</p>
                                        </div>
                                    )
                                else return <></>
                            })}
                        </div>
                        :
                        <div className='LoaderBox'>
                            <span className="Loader"></span>
                        </div>
                    }
                </div>
            </div>
        </section>
    );
}

export default Main;
