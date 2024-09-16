document.addEventListener('DOMContentLoaded', function() {
    var viewer = pannellum.viewer('panorama-viewer', {
        type: 'equirectangular',
        panorama: https://josflint.github.io/MAexhibitiongallery/20240916_095024_386 - 20240916_095024_386.jp',
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
                panorama: 'https://josflint.github.io/MAexhibitiongallery/20240916_095024_386 - 20240916_095024_386.jp',
                name: 'Scene 2'
            },
            scene3: {
                panorama: 'https://josflint.github.io/MAexhibitiongallery/20240916_095024_386 - 20240916_095024_386.jp',
                name: 'Scene 3'
            }
        }
    });
});
