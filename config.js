var config = {
    style: 'mapbox://styles/heyumup/clsjyrorf01y501peh6e9alzo',
    accessToken: 'pk.eyJ1IjoiaGV5dW11cCIsImEiOiJjbHNiNzUwMDEwYnlwMmpwZGJmOGpwaHRpIn0.joN8TN9HuVOhlotmQir9yQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Life living in Blue Horizon',
    subtitle: 'Explore the convenience in Blue Horizon to schools and surrounding facilities',
    byline: 'By He Yu',
    footer: 'Source: Data.gov.sg. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'container',
            alignment: 'right',
            hidden: false,
            title: 'Location Of Blue Horizon',
            image: './blue_horizon.jpg',
            description: 'Blue Horizon is located in the West Coast Area in Singapore, quite close to NUS, every year, many students choose to rent houses here.',
            location: {
                center: [103.770,1.298],
                zoom: 14.80,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'school_life',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'home',
                    opacity: 1,
                    duration: 300              
                },
                {
                    layer: 'school_life_building',
                    opacity: 0,
                    duration: 300               
                },
                {
                    layer: 'parkfacilities',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'buffered',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'weekends_life',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'mrt_station',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'weekdays_out_of_school_life',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'facilities',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: '400m_buffer',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: '800m_buffer',
                    opacity: 0,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'school_life',
                    opacity: 1
                },
                {
                    layer: 'home',
                    opacity: 1
                },
                {
                    layer: 'school_life_building',
                    opacity: 1
                },
                {
                    layer: 'parkfacilities',
                    opacity: 0
                },
                {
                    layer: 'buffered',
                    opacity: 0
                },
                {
                    layer: 'weekends_life',
                    opacity: 0
                },
                {
                    layer: 'mrt_station',
                    opacity: 0
                },
                {
                    layer: 'weekdays_out_of_school_life',
                    opacity: 0
                },
                {
                    layer: 'facilities',
                    opacity: 0
                },
                {
                    layer: '400m_buffer',
                    opacity: 0
                },
                {
                    layer: '800m_buffer',
                    opacity: 0
                }
            ]
        },
        {
            id: 'first-container',
            alignment: 'left',
            hidden: false,
            title: 'School Life In Blue Horizon',
            image:'./park.jpg',
            description: 'As a student, school life takes up most of my life. When deciding where to rent a house, the distance from the classroom is a major factor that affects the final decision. But being close to the school in a straight line does not provide me with more convenience. Compared with students who arrive at school by bus or subway, every day I need to walk through a park to get to school. Although the commute only takes ten minutes, the entire commute is completed on foot.',
            location: {
                center: [103.7655,1.299],
                zoom: 16.26,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'school_life',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'home',
                    opacity: 1,
                    duration: 300              
                },
                {
                    layer: 'school_life_building',
                    opacity: 1,
                    duration: 300                
                },
                {
                    layer: 'parkfacilities',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'buffered',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'weekends_life',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'mrt_station',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'weekdays_out_of_school_life',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'facilities',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: '400m_buffer',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: '800m_buffer',
                    opacity: 0,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'school_life',
                    opacity: 0
                },
                {
                    layer: 'home',
                    opacity: 1
                },
                {
                    layer: 'school_life_building',
                    opacity: 0
                },
                {
                    layer: 'parkfacilities',
                    opacity: 0
                },
                {
                    layer: 'buffered',
                    opacity: 0
                },
                {
                    layer: 'weekends_life',
                    opacity: 0
                },
                {
                    layer: 'mrt_station',
                    opacity: 0
                },
                {
                    layer: 'weekdays_out_of_school_life',
                    opacity: 1
                },
                {
                    layer: 'facilities',
                    opacity: 1
                },
                {
                    layer: '400m_buffer',
                    opacity: 0.4
                },
                {
                    layer: '800m_buffer',
                    opacity: 0.4
                }
            ]
        },
        {
            id: 'second-container',
            alignment: 'right',
            hidden: false,
            title: 'Life In Weekdays After School',
            description: 'After class on weekdays, I go to nearby food courts, supermarkets and shopping malls. However, from analysis, blue horizon has poor accessibility to the nearest supermarkets, food courts and shopping malls. None of these facilities are accessible within a 5-minute (400m) walk and require a 10-minute (800m) walk.',
            location: {
                center: [103.772, 1.304],
                zoom: 14.55,
                pitch: 0,
                bearing: 0,
                speed: 2
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'school_life',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'home',
                    opacity: 1,
                    duration: 300              
                },
                {
                    layer: 'school_life_building',
                    opacity: 0,
                    duration: 300                
                },
                {
                    layer: 'parkfacilities',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'buffered',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'weekends_life',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'mrt_station',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'weekdays_out_of_school_life',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'facilities',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: '400m_buffer',
                    opacity: 0.4,
                    duration: 300
                },
                {
                    layer: '800m_buffer',
                    opacity: 0.4,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'school_life',
                    opacity: 0
                },
                {
                    layer: 'home',
                    opacity: 0.5
                },
                {
                    layer: 'school_life_building',
                    opacity: 0
                },
                {
                    layer: 'parkfacilities',
                    opacity: 0
                },
                {
                    layer: 'buffered',
                    opacity: 0
                },
                {
                    layer: 'weekends_life',
                    opacity: 1
                },
                {
                    layer: 'mrt_station',
                    opacity: 1
                },
                {
                    layer: 'weekdays_out_of_school_life',
                    opacity: 0
                },
                {
                    layer: 'facilities',
                    opacity: 0
                },
                {
                    layer: '400m_buffer',
                    opacity: 0
                },
                {
                    layer: '800m_buffer',
                    opacity: 0
                }
            ],
        },
        {
            id: 'third-container',
            alignment: 'right',
            hidden: false,
            title: 'Life in Weekends',
            description: 'After a week of courses, I will choose to go to an area with more concentrated business on the weekends, because blue horizon is located in the southwest of Singapore, and you can get to the city center as quickly as possible by taking the EW line. Starting from blue horizon, I usually choose to walk about 200m to the nearest bus station, and then take bus 201 to the nearest Clementi MRT station.',
            location: {
                center: [103.772, 1.305],
                zoom: 14.31,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'school_life',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'home',
                    opacity: 1,
                    duration: 300              
                },
                {
                    layer: 'school_life_building',
                    opacity: 0,
                    duration: 300                
                },
                {
                    layer: 'parkfacilities',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'buffered',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'weekends_life',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'mrt_station',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'weekdays_out_of_school_life',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'facilities',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: '400m_buffer',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: '800m_buffer',
                    opacity: 0,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'school_life',
                    opacity: 0
                },
                {
                    layer: 'home',
                    opacity: 1
                },
                {
                    layer: 'school_life_building',
                    opacity: 0
                },
                {
                    layer: 'parkfacilities',
                    opacity: 1
                },
                {
                    layer: 'buffered',
                    opacity: 0.4
                },
                {
                    layer: 'weekends_life',
                    opacity: 0
                },
                {
                    layer: 'mrt_station',
                    opacity: 0
                },
                {
                    layer: 'weekdays_out_of_school_life',
                    opacity: 0
                },
                {
                    layer: 'facilities',
                    opacity: 0
                },
                {
                    layer: '400m_buffer',
                    opacity: 0
                },
                {
                    layer: '800m_buffer',
                    opacity: 0
                }
            ]
        },
        {
            id: 'forth-container',
            alignment: 'left',
            hidden: false,
            title: 'Green and Blue Life',
            image: './west_coast_park.jpg',
            description: 'A healthy life is inseparable from the harmonious coexistence between man and nature. Whether on weekdays or weekends, good accessibility to park facilities is crucial to improving the quality of life. For the accessibility analysis of park facilities, I selected the facilities in West Coast Park closest to blue horizon for analysis, and established a buffer zone with a radius of 250m, which has well covered the entire community.',
            location: {
                center: [103.761, 1.297],
                zoom: 15.46,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'school_life',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'home',
                    opacity: 1,
                    duration: 300              
                },
                {
                    layer: 'school_life_building',
                    opacity: 0,
                    duration: 300                
                },
                {
                    layer: 'parkfacilities',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'buffered',
                    opacity: 0.4,
                    duration: 300
                },
                {
                    layer: 'weekends_life',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'mrt_station',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'weekdays_out_of_school_life',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'facilities',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: '400m_buffer',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: '800m_buffer',
                    opacity: 0,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'school_life',
                    opacity: 0
                },
                {
                    layer: 'home',
                    opacity: 1
                },
                {
                    layer: 'school_life_building',
                    opacity: 0
                },
                {
                    layer: 'parkfacilities',
                    opacity: 0
                },
                {
                    layer: 'buffered',
                    opacity: 0
                },
                {
                    layer: 'weekends_life',
                    opacity: 0
                },
                {
                    layer: 'mrt_station',
                    opacity: 0
                },
                {
                    layer: 'weekdays_out_of_school_life',
                    opacity: 0
                },
                {
                    layer: 'facilities',
                    opacity: 0
                },
                {
                    layer: '400m_buffer',
                    opacity: 0
                },
                {
                    layer: '800m_buffer',
                    opacity: 0
                }
            ]
        }
    ]
};