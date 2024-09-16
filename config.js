document.addEventListener('DOMContentLoaded', function() {
    var viewer = pannellum.viewer('panorama-viewer', {
        type: 'equirectangular',
        panorama: 'https://raw.githubusercontent.com/JosFlint/RE-VIEWING_THE_GAZE/main/20240916_095024_386%20-%2020240916_095024_386.jpg',
        autoLoad: true,
        hotspots: [
            {
                pitch: 10,  // Adjusted pitch for better visibility
                yaw: 30,    // Adjusted yaw for better visibility
                type: 'info',
                text: 'Go to Panorama 2',
                clickHandlerFunc: function() {
                    viewer.loadScene('scene2');
                }
            },
            {
                pitch: -10, // Adjusted pitch for better visibility
                yaw: -30,   // Adjusted yaw for better visibility
                type: 'info',
                text: 'Go to Panorama 3',
                clickHandlerFunc: function() {
                    viewer.loadScene('scene3');
                }
            }
        ],
        scenes: {
            scene2: {
                panorama: 'https://raw.githubusercontent.com/JosFlint/RE-VIEWING_THE_GAZE/main/20240916_095036_842.jpg',
                name: 'Scene 2'
            },
            scene3: {
                panorama: 'https://raw.githubusercontent.com/JosFlint/RE-VIEWING_THE_GAZE/main/20240916_095052_601.jpg',
                name: 'Scene 3'
            }
        }
    });
});
