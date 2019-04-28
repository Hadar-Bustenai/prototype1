var botui;
var Shooka;

var chatbotDialogTree = [
        {
            "Shooka": {
                "introduction": {
                    "message": "היי אני שוקה. אני שמח שבחרת לדבר איתי, מה שמך?",
                    "followUp": `נעים להכיר `
                },
                "conversation": {
                    "startingQuestion":
                    {
                        "message": "לספר לך קצת עליי?",
                        "userOptions": {
                            "yes": {
                                "buttonName": "כן",
                                "text": "אז אחזור שנית, אני שוקה, בן 86. מה היה מעניין אותך לדעת אודותי?"
                            },
                            "no": {
                                "buttonName": "לא",
                                "text": "הייתי ממש שמח לשתף אותך בכל זאת. נו טוב, מחכה לך לפעם אחרת."
                            }
                        }
                    },
                    "hobbies":
                    {
                        "message1": "אני מאוד אוהב לטייל בארץ היפה שלנו, זו התשוקה שלי.",
                        "message2": "שולח לך קטע קצר שעשו לי 'פאפארצי' בזמן שהדרכתי קבוצה.",
                        "video": "https://vimeo.com/320926038",
                        "userOptions": {
                            "option1": {
                                "buttonName": "האם אתה מאושר?",
                                "message1": "למרות שלצערי חוויתי אובדן בני אלעד, אני משתדל לקום בבוקר ולעשות את מה שאני אוהב, להתמקד במה שטוב בחיים ובעיקר לא להתמקד בגיל שלי, אלא פשוט לחיות את החיים.",
                                "message2": "ואם ישאלו אותי, האם אני מתחרט על משהו בחיי, אפשר להגיד לא, וזה כל הקסם.",
                                "video": "https://vimeo.com/320926147"
                            },
                            "option2": {
                                "buttonName": "איך שומרים על חיוניות ואופטימיות בגילך?",
                                "message1": "למרות שלצערי חוויתי אובדן בני אלעד, אני משתדל לקום בבוקר ולעשות את מה שאני אוהב, להתמקד במה שטוב בחיים ובעיקר לא להתמקד בגיל שלי, אלא פשוט לחיות את החיים.",
                                "message2": "ואם ישאלו אותי, האם אני מתחרט על משהו בחיי, אפשר להגיד לא, וזה כל הקסם.",
                                "video": "https://youtube.com"
                            },
                            "option3": {
                                "buttonName": "האם יש בך חרטות כלשהן?",
                                "message1": "למרות שלצערי חוויתי אובדן בני אלעד, אני משתדל לקום בבוקר ולעשות את מה שאני אוהב, להתמקד במה שטוב בחיים ובעיקר לא להתמקד בגיל שלי, אלא פשוט לחיות את החיים.",
                                "message2": "ואם ישאלו אותי, האם אני מתחרט על משהו בחיי, אפשר להגיד לא, וזה כל הקסם.",
                                "video": "https://youtube.com"
                            }

                        }
                    },
                    "family":
                    {
                        "video": "https://vimeo.com/320917597",
                        "userOptions": {
                            "option1": {
                                "buttonName": "למה זו הייתה שאלה קשה?",
                                "video": "https://vimeo.com/320926318",
                                "message1": "כמו שבטח הבנת, לצערי איבדתי את בני בתאונת דרכים בנפאל."
                            },
                            "option2": {
                                "buttonName": "אתה עדיין גר עם אשתך?",
                                "video": "https://vimeo.com/320926255",
                                "message": "אז אלעד היה הבן שלי, שנהרג בתאונת דרכים בנפאל. נהגנו לטייל יחדיו עד מותו ואני מרגיש שאני מחוייב לעשות את זה למענו."
                            },
                            "option3": {
                                "buttonName": "איך הקשר שלך עם ילדייך?",
                                "message": "היו לי ארבעה ילדים שאני מאוד מאוד אוהב. לאחר האובדן שחווינו כמשפחה לאחר מותו של בני אלעד בתאונת דרכים בנפאל, הבנתי עוד יותר עד כמה משפחה היא משמעותית."
                            },
                            "userOptions": {
                                "option1": {
                                    "buttonName": "אז מה עזר לך להמשיך הלאה?",
                                    "video": "https://youtube.com",
                                },
                                "option2": {
                                    "buttonName": "האם האובדן שחווית מלווה אותך בכל יום?",
                                    "video": "https://youtube.com",
                                }
                            }
                        }
                    }

                },
                "goodbye": {
                    "message1": "אני יוצא כעת לנסות מסלול חדש, תודה רבה שהקדשת זמן להכיר אותי ואת הסיפור שלי.",
                    "message2": "אני שולח לך קישור לסרט המלא שתיעדו אותי בו, צפייה מהנה!",
                    "message3": "ולא לשכוח לטייל בארץ!",
                    "userOptions": {
                        "option1": {
                            "buttonName": "צפייה בסרטון המלא",
                            "video": "https://vimeo.com/322019687",
                        },
                        "option2": {
                            "buttonName": "סיום שיחה"
                        }
                    }
                }
            }

        }
]

$(document).ready(function () {
    botui = new BotUI('my-botui-app');
    Shooka = chatbotDialogTree[0].Shooka;
    ShookaBotActivate();

    //window.scrollTo(0, document.body.scrollHeight);//גלילה למטה

})


function ShookaBotActivate() {
    botui.message.add({//הודעת פתיחה
        content: Shooka.introduction.message,
        delay: 2000,
        loading: true
    }).then(function () {

        botui.action.text({//משתמש מזין שם
            action: {
                placeholder: 'הקלידו שם'
            },
            delay: 1000
        }).then(function (res) { //שוקה עונה למשתמש עם השם
            botui.message.add({
                content: "😍 " + Shooka.introduction.followUp + res.value,
                delay: 2000,
                loading: true
            }).then(function () { //שוקה שואל אם הוא מעוניין לשמוע עליו  
                botui.message.add({
                    content: Shooka.conversation.startingQuestion.message,
                    delay: 2000,
                    loading: true
                }).then(function () { // משתמש בוחר בלחיצת כפתור אם כן או לא
                    botui.action.button({
                        action: [
                            {
                                text: "לא",
                                value: 'no'
                            },
                            {
                                text: "כן",
                                value: 'yes'
                            }
                        ]
                    }).then(function (res) { // ניווט המשתמש להמשך או סיום שיחה בהתאם לבחירה שלו

                        switch (res.value) {
                            case "yes": //אם בחר כן להמשיך

                                botui.message.add({ // שוקה שואל את המשתמש על מה ירצה שהוא יספר
                                    content: Shooka.conversation.startingQuestion.userOptions.yes.text,
                                    delay: 2000,
                                    loading: true
                                }).then(function () { // משתמש בוחר בלחיצת כפתור בנושא בו הוא מעוניין
                                    botui.action.button({
                                        action: [
                                            {
                                                text: "משפחה",
                                                value: 'family'
                                            },
                                            {
                                                text: "תחביבים",
                                                value: 'hobbies'
                                            }
                                        ]
                                    }).then(function (res) { // ניווט המשתמש לנושא השיחה הרלוונטי בהתאם לבחירה שלו

                                        switch (res.value) {
                                            case "family": //אם בחר כן משפחה
                                                botui.message.add({ // הקרנת סרטון : דקה 2:00-2:29
                                                    type: 'html',
                                                    content: '<iframe src="https://player.vimeo.com/video/320917597"  frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
                                                    delay: 2000,
                                                    loading: true
                                                }).then(function () {
                                                    botui.message.add({ //שוקה ממתין עד שהסרטון יסתיים
                                                        content: 'null',
                                                        cssClass: 'hidden-elements',
                                                        delay: 30000,
                                                        loading: false
                                                    }).then(function () {
                                                        botui.action.button({// משתמש בוחר שאלה לאחר הסרטון
                                                            action: [
                                                                {
                                                                    text: Shooka.conversation.family.userOptions.option1.buttonName,
                                                                    value: 'option1'
                                                                },
                                                                {
                                                                    text: Shooka.conversation.family.userOptions.option2.buttonName,
                                                                    value: 'option2'
                                                                },
                                                                {
                                                                    text: Shooka.conversation.family.userOptions.option3.buttonName,
                                                                    value: 'option3'
                                                                }
                                                            ]
                                                        }).then(function (res) {
                                                            switch (res.value) {
                                                                case "option1": //אם בחר כן אפשרות 1
                                                                    botui.message.add({ // הקרנת סרטון : דקה 2:35-2:49
                                                                        type: 'html',
                                                                        content: '<iframe src="https://player.vimeo.com/video/320926318" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
                                                                        delay: 2000,
                                                                        loading: true
                                                                    }).then(function () {
                                                                        botui.message.add({ //שוקה ממתין עד שהסרטון יסתיים
                                                                            content: 'null',
                                                                            cssClass: 'hidden-elements',
                                                                            delay: 15000,
                                                                            loading: false
                                                                        }).then(function () {
                                                                            botui.message.add({ // שוקה ממשיך לענות על השאלה
                                                                                content: Shooka.conversation.family.userOptions.option1.message1,
                                                                                delay: 3000,
                                                                                loading: true
                                                                            }).then(function () {
                                                                                console.log("check");
                                                                                lastCase();
                                                                            })
                                                                        });
                                                                    });
                                                                    break; //של אופציה 1
                                                                case "option2": //אם בחר כן אפשרות 2
                                                                    botui.message.add({ // הקרנת סרטון : דקה 2:47-3:05
                                                                        type: 'html',
                                                                        content: '<iframe src="https://player.vimeo.com/video/320926255" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
                                                                        delay: 2000,
                                                                        loading: true
                                                                    }).then(function () {
                                                                        botui.message.add({ //שוקה ממתין עד שהסרטון יסתיים
                                                                            content: 'null',
                                                                            cssClass: 'hidden-elements',
                                                                            delay: 22000,
                                                                            loading: false
                                                                        }).then(function () {
                                                                            botui.message.add({ // שוקה ממשיך לענות על השאלה
                                                                                content: Shooka.conversation.family.userOptions.option2.message,
                                                                                delay: 3000,
                                                                                loading: true
                                                                            }).then(function () {
                                                                                console.log("check");
                                                                                lastCase();
                                                                            })
                                                                        });
                                                                    });
                                                                    break; //של אופציה 2
                                                                case "option3": //אם בחר כן אפשרות 3
                                                                    botui.message.add({ // שוקה ממשיך לענות על השאלה
                                                                        content: Shooka.conversation.family.userOptions.option3.message,
                                                                        delay: 3000,
                                                                        loading: true
                                                                    }).then(function () {
                                                                        console.log("check");
                                                                        lastCase();
                                                                    })
                                                                    break; //של אופציה 3
                                                            }
                                                            //לבדוק!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                                                            //המשך סנריו לאחר בחירות
                                                        });
                                                    });
                                                });
                                                break;
                                            case "hobbies": // אם בחר תחביבים
                                                botui.message.add({ // שוקה מתחיל לספר על התחביבים
                                                    content: Shooka.conversation.hobbies.message1,
                                                    delay: 2000,
                                                    loading: true
                                                }).then(function () {
                                                    botui.message.add({ // שוקה מעדכן שהוא שולח סרטון
                                                        content: Shooka.conversation.hobbies.message2,
                                                        delay: 1500,
                                                        loading: true
                                                    }).then(function () {
                                                        botui.message.add({ // הקרנת סרטון : דקה 1:26 - 1:44
                                                            type: 'html',
                                                            content: '<iframe src="https://player.vimeo.com/video/320926038" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
                                                            delay: 2000,
                                                            loading: true
                                                        }).then(function () {
                                                            botui.message.add({ //שוקה ממתין עד שהסרטון יסתיים
                                                                content: 'null',
                                                                cssClass: 'hidden-elements',
                                                                delay: 30000,
                                                                loading: false
                                                            }).then(function () {
                                                                botui.action.button({// משתמש בוחר שאלה לאחר הסרטון
                                                                    action: [
                                                                        {
                                                                            text: Shooka.conversation.hobbies.userOptions.option1.buttonName,
                                                                            value: 'option1'
                                                                        },
                                                                        {
                                                                            text: Shooka.conversation.hobbies.userOptions.option2.buttonName,
                                                                            value: 'option2'
                                                                        },
                                                                        {
                                                                            text: Shooka.conversation.hobbies.userOptions.option3.buttonName,
                                                                            value: 'option3'
                                                                        }
                                                                    ]
                                                                }).then(function (res) {

                                                                    botui.message.add({ // שוקה עונה על השאלה
                                                                        content: Shooka.conversation.hobbies.userOptions.option1.message1,
                                                                        delay: 2000,
                                                                        loading: true
                                                                    }).then(function () {

                                                                        botui.message.add({ // שוקה ממשיך לענות על השאלה
                                                                            content: Shooka.conversation.hobbies.userOptions.option1.message2,
                                                                            delay: 3000,
                                                                            loading: true
                                                                        }).then(function () {
                                                                            botui.message.add({ // הקרנת סרטון : דקה 3:59-5:00 
                                                                                type: 'html',
                                                                                content: '<iframe src="https://player.vimeo.com/video/320926147" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
                                                                                delay: 2000,
                                                                                loading: true
                                                                            }).then(function () {
                                                                                botui.message.add({ //שוקה ממתין עד שהסרטון יסתיים
                                                                                    content: 'null',
                                                                                    cssClass: 'hidden-elements',
                                                                                    delay: 65000,
                                                                                    loading: false
                                                                                }).then(function () { //מעבר לסיום השיחה  
                                                                                    goodbyeFunc();
                                                                                })
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    })
                                                })

                                                break;
                                        }
                                    });
                                });
                                break;
                            case "no": // אם בחר לא להמשיך שיחה
                                botui.message.add({
                                    content: Shooka.conversation.startingQuestion.userOptions.no.text,
                                    delay: 2000,
                                    loading: true
                                }).then(function () {
                                    botui.message.add({
                                        content: " שיחה הסתיימה ",
                                        delay: 1000,
                                        loading: true
                                    }).then(function () {
                                        botui.action.button({
                                            action: [
                                                { // התחל מחדש
                                                    text: 'התחל מחדש',
                                                    value: 'restart'
                                                }
                                            ]
                                        }).then(function (res) {
                                            location.reload();
                                        });
                                    })

                                });
                                break;
                        }
                    });
                });
            });
        });
    });
}
//פונקציה לאותו סוף לאחר בחירה במשפחה
function lastCase() {
    botui.action.button({// משתמש בוחר שאלה לאחר הסרטון
        action: [
            {
                text: Shooka.conversation.family.userOptions.userOptions.option1.buttonName,
                value: 'option1'
            },
            {
                text: Shooka.conversation.family.userOptions.userOptions.option2.buttonName,
                value: 'option2'
            }
        ]
    }).then(function (res) {
        botui.message.add({ // הקרנת סרטון : דקה 3:59-5:00 
            type: 'html',
            content: '<iframe src="https://player.vimeo.com/video/320926147" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
            delay: 2000,
            loading: true
        }).then(function () {
            botui.message.add({ //שוקה ממתין עד שהסרטון יסתיים
                content: 'null',
                cssClass: 'hidden-elements',
                delay: 65000,
                loading: false
            }).then(function () { //מעבר לסיום השיחה  
                goodbyeFunc();
            })
        });
    });
}

function goodbyeFunc() {
    botui.message.add({
        content: Shooka.goodbye.message1,
        delay: 2000,
        loading: true
    }).then(function () {
        botui.message.add({
            content: Shooka.goodbye.message2,
            delay: 2000,
            loading: true
        }).then(function () {
            botui.message.add({
                content: Shooka.goodbye.message3,
                delay: 2000,
                loading: true
            }).then(function () { // משתמש בוחר בלחיצת כפתור בנושא בו הוא מעוניין
                botui.action.button({
                    action: [
                        {
                            text: Shooka.goodbye.userOptions.option1.buttonName,
                            value: 'watch'
                        },
                        {
                            text: Shooka.goodbye.userOptions.option2.buttonName,
                            value: 'bye'
                        }
                    ]
                }).then(function (res) {
                    switch (res.value) {
                        case "watch":
                            botui.message.add({ // הקרנת סרטון סיום 
                                type: 'html',
                                content: '<iframe src="https://player.vimeo.com/video/322019687" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
                                delay: 2000,
                                loading: true
                            }).then(function () {
                                botui.action.button({
                                    action: [
                                        { // התחל מחדש
                                            text: 'התחל מחדש',
                                            value: 'restart'
                                        }
                                    ]
                                }).then(function (res) {
                                    location.reload();
                                });
                            });
                            break;
                        case "bye":
                            botui.message.add({
                                content: Shooka.conversation.startingQuestion.userOptions.no.text,
                                delay: 2000,
                                loading: true
                            }).then(function () {
                                botui.message.add({
                                    content: " שיחה הסתיימה ",
                                    delay: 1000,
                                    loading: true
                                }).then(function () {
                                    botui.action.button({
                                        action: [
                                            { // התחל מחדש
                                                text: 'התחל מחדש',
                                                value: 'restart'
                                            }
                                        ]
                                    }).then(function (res) {
                                        location.reload();
                                    });
                                })

                            });

                    }
                })
            })
        })

    })
}