'use strict';

module.exports = (() => {
    const brand_title = 'First in Software';

    const home = {
        features: [
            {
                img_location: './assets/pre-planning-thumb.png',
                title: 'Pre-Planning',
                description: 'Manage and view occupancies on the map and retrieve pre-plan data at the touch of a finger.'
            },
            {
                img_location: './assets/vehicle-tracking-thumb.png',
                title: 'AVL',
                description: 'Visually track the real time location of responding units.'
            },
            {
                img_location: './assets/cad-thumb.png',
                title: 'CAD Integration',
                description: 'CADDirect integrates directly with your CAD system to access incident data, locate and view incidents on the map.'
            },
            {
                img_location: './assets/hydrant-management-thumb.png',
                title: 'Hydrant Management',
                description: 'Manage and view your hydrants on the map color coded per NFPA.'
            },
            {
                img_location: './assets/mobile-friendly-thumb.png',
                title: 'Desktop / Mobile',
                description: 'Works on all platforms and every major phone, tablet and PC. Windows, iPad, iPhone, Android and more!'
            }
        ]
    };

    return {
        home
    }
})();