// SchawLabs E-commerce JavaScript
// Global variables
const productsGrid = document.getElementById('products-grid');
const categoryItems = document.querySelectorAll('.category-item');
const searchInput = document.getElementById('search-input');
const cartCount = document.querySelector('.cart-count');
const modal = document.getElementById('product-modal');
const modalOverlay = document.getElementById('modal-overlay');

// New variables for enhanced features
const loadingState = document.getElementById('loading-state');
const recentlyViewedSection = document.getElementById('recently-viewed-section');
const recentlyViewedGrid = document.getElementById('recently-viewed-grid');

const toastContainer = document.getElementById('toast-container');

// SchawLabs Complete Product Catalog
const products = [




    // Retatrutide Series (MOVED TO POSITION 3 - THIRD POSITION OF FIRST ROW)  
    // Retatrutide Pricing Formula Applied:
    // RT5: VendorPricePerKit=$98, VialsPerKit=10, Cost_per_vial=$9.80, Single_Vial_Retail=round(9.80*2.5)=$25, Kit_Retail_A=round(98*2.5)=$245, Kit_Retail_B=round(25*10*0.975)=$244, Kit_Retail=min(245,244)=$244
    // RT10: VendorPricePerKit=$130, VialsPerKit=10, Cost_per_vial=$13.00, Single_Vial_Retail=round(13.00*2.5)=$33, Kit_Retail_A=round(130*2.5)=$325, Kit_Retail_B=round(33*10*0.975)=$322, Kit_Retail=min(325,322)=$322
    // RT15: VendorPricePerKit=$158, VialsPerKit=10, Cost_per_vial=$15.80, Single_Vial_Retail=round(15.80*2.5)=$40, Kit_Retail_A=round(158*2.5)=$395, Kit_Retail_B=round(40*10*0.975)=$390, Kit_Retail=min(395,390)=$390
    // RT20: VendorPricePerKit=$189, VialsPerKit=10, Cost_per_vial=$18.90, Single_Vial_Retail=round(18.90*2.5)=$47, Kit_Retail_A=round(189*2.5)=$473, Kit_Retail_B=round(47*10*0.975)=$458, Kit_Retail=min(473,458)=$458
    // RT30: VendorPricePerKit=$245, VialsPerKit=10, Cost_per_vial=$24.50, Single_Vial_Retail=round(24.50*2.5)=$61, Kit_Retail_A=round(245*2.5)=$613, Kit_Retail_B=round(61*10*0.975)=$595, Kit_Retail=min(613,595)=$595
    // RT50: VendorPricePerKit=$345, VialsPerKit=10, Cost_per_vial=$34.50, Single_Vial_Retail=round(34.50*2.5)=$86, Kit_Retail_A=round(345*2.5)=$863, Kit_Retail_B=round(86*10*0.975)=$839, Kit_Retail=min(863,839)=$839
    // RT60: VendorPricePerKit=$384, VialsPerKit=10, Cost_per_vial=$38.40, Single_Vial_Retail=round(38.40*2.5)=$96, Kit_Retail_A=round(384*2.5)=$960, Kit_Retail_B=round(96*10*0.975)=$936, Kit_Retail=min(960,936)=$936
    { id: 3, name: 'Retatrutide', catNum: 'RT5-RT60', category: 'glp-1-agonists', price: { min: 25, max: 936 }, image: 'StockPhotos/Reta/Reta5mg.png', badge: 'Best Seller', popularity: 8,
      description: 'Next-generation triple-action peptide for cutting-edge metabolic research. GLP-1/GIP/Glucagon receptor triple agonist.',
      features: ['Triple receptor action', 'Premium quality', 'Latest innovation', 'Research grade'],
      defaultSize: 'RT5 - 5mg (1 vial) - Coming Soon', // Specify default size (5mg individual vial)
      sizes: [
        { size: 'RT5 - 5mg (1 vial) - Coming Soon', price: 25, image: 'StockPhotos/Reta/Reta5mg.png', comingSoon: true, quantity: 1 },
        { size: 'RT5 - 5mg, 10vial/kit', price: 244, image: 'StockPhotos/Reta/Reta5mgKit.png', quantity: 10 },
        { size: 'RT10 - 10mg (1 vial) - Coming Soon', price: 33, image: 'StockPhotos/Reta/Reta10mg.png', comingSoon: true, quantity: 1 },
        { size: 'RT10 - 10mg, 10vial/kit', price: 322, image: 'StockPhotos/Reta/Reta10mgKit.png', quantity: 10 },
        { size: 'RT15 - 15mg (1 vial) - Coming Soon', price: 40, image: 'StockPhotos/Reta/Reta15mg.png', comingSoon: true, quantity: 1 },
        { size: 'RT15 - 15mg, 10vial/kit', price: 390, image: 'StockPhotos/Reta/Reta15mgKit.png', quantity: 10 },
        { size: 'RT20 - 20mg (1 vial) - Coming Soon', price: 47, image: 'StockPhotos/Reta/Reta20mg.png', comingSoon: true, quantity: 1 },
        { size: 'RT20 - 20mg, 10vial/kit', price: 458, image: 'StockPhotos/Reta/Reta20mgKit.png', quantity: 10 },
        { size: 'RT30 - 30mg (1 vial) - Coming Soon', price: 61, image: 'StockPhotos/Reta/Reta30mg.png', comingSoon: true, quantity: 1 },
        { size: 'RT30 - 30mg, 10vial/kit', price: 595, image: 'StockPhotos/Reta/Reta30mgKit.png', quantity: 10 },
        { size: 'RT50 - 50mg (1 vial) - Coming Soon', price: 86, image: 'StockPhotos/Reta/Reta50mg.png', comingSoon: true, quantity: 1 },
        { size: 'RT50 - 50mg, 10vial/kit', price: 839, image: 'StockPhotos/Reta/Reta50mgKit.png', quantity: 10 },
        { size: 'RT60 - 60mg (1 vial) - Coming Soon', price: 96, image: 'StockPhotos/Reta/Reta60mg.png', comingSoon: true, quantity: 1 },
        { size: 'RT60 - 60mg, 10vial/kit', price: 936, image: 'StockPhotos/Reta/Reta60mgKit.png', quantity: 10 }
      ],
      note: 'For advanced research purposes only.' },

    // BPC-157 Series (moved to position 4 - second row)
    { id: 4, name: 'BPC-157', catNum: 'BC5-BC10', category: 'healing-peptides', price: { min: 16, max: 205 }, image: 'StockPhotos/BPC-157/BC5.png', badge: 'Healing', popularity: 10,
      description: 'Body Protection Compound for tissue repair and regeneration research. Derived from human gastric juice protective protein.',
      features: ['Tissue repair', 'High stability', 'Research proven', 'Synthetic peptide'],
      defaultSize: 'BC5 - 5mg (1 vial) - Coming Soon', // Specify default size (5mg individual vial)
      sizes: [
        { size: 'BC5 - 5mg (1 vial) - Coming Soon', price: 16, image: 'StockPhotos/BPC-157/BC5.png', comingSoon: true, quantity: 1 },
        { size: 'BC5 - 5mg, 10vial/kit', price: 156, image: 'StockPhotos/BPC-157/BPC5mgKit.png', quantity: 10 },
        { size: 'BC10 - 10mg (1 vial) - Coming Soon', price: 21, image: 'StockPhotos/BPC-157/BC10.png', comingSoon: true, quantity: 1 },
        { size: 'BC10 - 10mg, 10vial/kit', price: 205, image: 'StockPhotos/BPC-157/BPC10mgKit.png', quantity: 10 }
      ],
      note: 'Laboratory research compound only.' },



    // Ipamorelin
    { id: 9, name: 'Ipamorelin', catNum: 'IP5-IP10', category: 'growth-hormones', price: { min: 15, max: 224 }, image: 'StockPhotos/Ipa/Ipa5mg.png', badge: 'Growth', popularity: 7,
      description: 'Selective growth hormone releasing peptide for research. GHRP with minimal side effect profile.',
      features: ['Selective GHRP', 'Minimal side effects', 'Research proven', 'High purity'],
      defaultSize: 'IP5 - 5mg, 10vial/kit', // Specify default size (5mg kit)
      sizes: [
        { size: 'IP5 - 5mg (1 vial) - Coming Soon', price: 15, image: 'StockPhotos/Ipa/Ipa5mg.png', comingSoon: true, quantity: 1 },
        { size: 'IP5 - 5mg, 10vial/kit', price: 146, image: 'StockPhotos/Ipa/Ipamorelin5mgKit.png', quantity: 10 },
        { size: 'IP10 - 10mg (1 vial) - Coming Soon', price: 23, image: 'StockPhotos/Ipa/Ipa10mg.png', comingSoon: true, quantity: 1 },
        { size: 'IP10 - 10mg, 10vial/kit', price: 224, image: 'StockPhotos/Ipa/Ipamorelin10mgKit.png', quantity: 10 }
      ],
      note: 'For research purposes only.' },

    // CJC-1295
    { id: 10, name: 'CJC-1295 NO DAC', catNum: 'CND5-CND10', category: 'growth-hormones', price: { min: 24, max: 488 }, image: 'StockPhotos/CJCNo/CJCNo5mg.png', badge: 'Growth', popularity: 6,
      description: 'Growth hormone releasing hormone analog for research. Modified GHRH with enhanced stability.',
      features: ['No DAC version', 'Flexible dosing', 'Research grade', 'High quality'],
      defaultSize: 'CND5 - 5mg (1 vial) - Coming Soon', // Specify default size (5mg individual vial)
      sizes: [
        { size: 'CND5 - 5mg (1 vial) - Coming Soon', price: 24, image: 'StockPhotos/CJCNo/CJCNo5mg.png', comingSoon: true, quantity: 1 },
        { size: 'CND5 - 5mg, 10vial/kit', price: 234, image: 'StockPhotos/CJCNo/CJC5gmKitNo.png', quantity: 10 },
        { size: 'CND10 - 10mg (1 vial) - Coming Soon', price: 50, image: 'StockPhotos/CJCNo/CJCNo10mg.png', comingSoon: true, quantity: 1 },
        { size: 'CND10 - 10mg, 10vial/kit', price: 488, image: 'StockPhotos/CJCNo/CJC10mgKitNo.png', quantity: 10 }
      ],
      note: 'Research applications only.' },

    // CJC-1295 WITH DAC Pricing Formula Applied:
    // CD5: VendorPricePerKit=$188, VialsPerKit=10, Cost_per_vial=$18.80, Single_Vial_Retail=round(18.80*2.5)=$47, Kit_Retail_A=round(188*2.5)=$470, Kit_Retail_B=round(47*10*0.975)=$458, Kit_Retail=min(470,458)=$458
    { id: 62, name: 'CJC-1295 WITH DAC', catNum: 'CD5', category: 'growth-hormones', price: { min: 47, max: 458 }, image: 'StockPhotos/CJCW/CJC5mg.png', badge: 'Growth', popularity: 8,
      description: 'Long-acting growth hormone releasing hormone analog for research. DAC modification provides extended half-life.',
      features: ['Extended half-life', 'DAC modification', 'Research grade', 'High purity'],
      defaultSize: 'CWD5 - 5mg (1 vial) - Coming Soon', // Specify default size (5mg individual vial)
      sizes: [
        { size: 'CWD5 - 5mg (1 vial) - Coming Soon', price: 47, comingSoon: true, quantity: 1 },
        { size: 'CWD5 - 5mg, 10vial/kit', price: 458, quantity: 10 }
      ],
      note: 'For research purposes only.' },

    // NAD+ Products
    { id: 11, name: 'NAD+', catNum: 'NJ100-NJ500', category: 'longevity', price: { min: 16, max: 254 }, image: 'StockPhotos/NAD/NAD100.png', badge: 'Longevity', popularity: 7,
      description: 'Nicotinamide adenine dinucleotide for cellular energy research. Essential coenzyme for metabolic studies.',
      features: ['Cellular energy', 'Anti-aging research', 'High purity', 'Research grade'],
      defaultSize: 'NJ100 - 100mg (1 vial) - Coming Soon', // Specify default size (100mg individual vial)
      sizes: [
        { size: 'NJ100 - 100mg (1 vial) - Coming Soon', price: 16, image: 'StockPhotos/NAD/NAD100.png', comingSoon: true, quantity: 1 },
        { size: 'NJ100 - 100mg, 10vial/kit', price: 156, image: 'StockPhotos/NAD/NAD100mgKit.png', quantity: 10 },
        { size: 'NJ500 - 500mg (1 vial) - Coming Soon', price: 26, image: 'StockPhotos/NAD/NAD500.png', comingSoon: true, quantity: 1 },
        { size: 'NJ500 - 500mg, 10vial/kit', price: 254, image: 'StockPhotos/NAD/NAD500mgKit.png', quantity: 10 }
      ],
      note: 'Laboratory research only.' },



    // Glutathione
    { id: 13, name: 'Glutathione', catNum: 'GTT', category: 'longevity', price: { min: 23, max: 224 }, image: 'StockPhotos/Gluta/CD5mg.png', badge: 'Longevity', popularity: 6,
      description: 'Master antioxidant for cellular protection research. Tripeptide essential for oxidative stress studies.',
      features: ['Master antioxidant', 'Cellular protection', 'Research grade', 'High purity'],
      defaultSize: 'GTT - 1500mg (1 vial) - Coming Soon', // Specify default size (1500mg individual vial)
      sizes: [
        { size: 'GTT - 1500mg (1 vial) - Coming Soon', price: 23, image: 'StockPhotos/Gluta/CD5mg.png', comingSoon: true, quantity: 1 },
        { size: 'GTT - 1500mg, 10vial/kit', price: 224, image: 'StockPhotos/Gluta/Glutathione1500mgKit.png', quantity: 10 }
      ],
      note: 'For research purposes only.' },

    // Water Products
    { id: 14, name: 'BAC Water', catNum: 'BA3-BA10', category: 'liquids', price: { min: 6, max: 73 }, image: 'StockPhotos/BAC/BAC3ML.png', badge: 'Essential', popularity: 9,
      description: 'Bacteriostatic water for peptide reconstitution. 0.9% Benzyl Alcohol preservative for multi-dose use.',
      features: ['0.9% Benzyl alcohol', 'Sterile', 'Research grade', 'Multi-dose'],
      defaultSize: 'BA3 - 3ml (1 vial) - Coming Soon', // Specify default size (3ml individual vial)
      sizes: [
        { size: 'BA3 - 3ml (1 vial) - Coming Soon', price: 6, image: 'StockPhotos/BAC/BAC3ML.png', comingSoon: true, quantity: 1 },
        { size: 'BA3 - 3ml, 10vial/kit', price: 61, image: 'StockPhotos/BAC/Bac3mlKit.png', quantity: 10 },
        { size: 'BA10 - 10ml (1 vial) - Coming Soon', price: 8, image: 'StockPhotos/BAC/BAC10ML.png', comingSoon: true, quantity: 1 },
        { size: 'BA10 - 10ml, 10vial/kit', price: 73, image: 'StockPhotos/BAC/Bac10mlKit.png', quantity: 10 }
      ],
      note: 'For research reconstitution only.' },



    // 5-Amino-1MQ
    { id: 16, name: '5-Amino-1MQ', catNum: '5AM', category: 'metabolic', price: { min: 22, max: 214 }, image: 'StockPhotos/5-Amino/5amino5mg.png', badge: 'Metabolic', popularity: 6,
      description: 'NNMT inhibitor for metabolic research. Small molecule compound for cellular metabolism studies.',
      features: ['NNMT inhibitor', 'Metabolic research', 'Research grade', 'High purity'],
      defaultSize: '5AM - 5mg (1 vial) - Coming Soon', // Specify default size (5mg individual vial)
      sizes: [
        { size: '5AM - 5mg (1 vial) - Coming Soon', price: 22, image: 'StockPhotos/5-Amino/5amino5mg.png', comingSoon: true, quantity: 1 },
        { size: '5AM - 5mg, 10vial/kit', price: 214, image: 'StockPhotos/5-Amino/5-amino5mgKit.png', quantity: 10 }
      ],
      note: 'Laboratory research only.' },

    // Tesamorelin


    // Sermorelin
    { id: 18, name: 'Sermorelin Acetate', catNum: 'SMO5-SMO10', category: 'growth-hormones', price: { min: 23, max: 351 }, image: 'StockPhotos/Seromo/Seromo5mg.png', badge: 'Growth', popularity: 6,
      description: 'Growth hormone releasing hormone for research applications. 29 amino acid GHRH fragment.',
      features: ['GHRH fragment', 'Research grade', 'High purity', 'Acetate salt'],
      defaultSize: 'SMO5 - 5mg (1 vial) - Coming Soon', // Specify default size (5mg individual vial)
      sizes: [
        { size: 'SMO5 - 5mg (1 vial) - Coming Soon', price: 23, image: 'StockPhotos/Seromo/Seromo5mg.png', comingSoon: true, quantity: 1 },
        { size: 'SMO5 - 5mg, 10vial/kit', price: 224, image: 'StockPhotos/Seromo/SermorelinAcetate5mgKit.png', quantity: 10 },
        { size: 'SMO10 - 10mg (1 vial) - Coming Soon', price: 36, image: 'StockPhotos/Seromo/Seromo10mg.png', comingSoon: true, quantity: 1 },
        { size: 'SMO10 - 10mg, 10vial/kit', price: 351, image: 'StockPhotos/Seromo/SermorelinAcetate10mgKit.png', quantity: 10 }
      ],
      note: 'Laboratory research only.' },

    // Oxytocin


    // Epitalon
    { id: 20, name: 'Epitalon', catNum: 'ET10-ET50', category: 'longevity', price: { min: 18, max: 419 }, image: 'StockPhotos/Epi/Epi10mg.png', badge: 'Longevity', popularity: 6,
      description: 'Tetrapeptide for longevity and aging research. Telomere length and cellular aging studies.',
      features: ['Longevity research', 'Telomere studies', 'Research grade', 'High purity'],
      defaultSize: 'ET10 - 10mg (1 vial) - Coming Soon', // Specify default size (10mg individual vial)
      sizes: [
        { size: 'ET10 - 10mg (1 vial) - Coming Soon', price: 18, image: 'StockPhotos/Epi/Epi10mg.png', comingSoon: true, quantity: 1 },
        { size: 'ET10 - 10mg, 10vial/kit', price: 176, image: 'StockPhotos/Epi/Epitalon10mgKit.png', quantity: 10 },
        { size: 'ET50 - 50mg (1 vial) - Coming Soon', price: 43, image: 'StockPhotos/Epi/Epi50mg.png', comingSoon: true, quantity: 1 },
        { size: 'ET50 - 50mg, 10vial/kit', price: 419, image: 'StockPhotos/Epi/Epitalon50mgKit.png', quantity: 10 }
      ],
      note: 'For research purposes only.' },

    // TB-500 Series (moved to end)
    { id: 21, name: 'TB-500', catNum: 'BT5-BT10', category: 'healing-peptides', price: { min: 46, max: 780 }, image: 'StockPhotos/TB-500/TB5mg.png', badge: 'Healing', popularity: 8,
      description: 'Thymosin Beta-4 fragment for advanced tissue development research. Promotes cell migration and wound healing studies.',
      features: ['Tissue development', 'Research grade', 'High purity', 'Quality assured'],
      defaultSize: 'BT5 - 5mg, 10vial/kit', // Specify default size (5mg kit)
      sizes: [
        { size: 'BT5 - 5mg (1 vial) - Coming Soon', price: 46, image: 'StockPhotos/TB-500/TB5mg.png', comingSoon: true, quantity: 1 },
        { size: 'BT5 - 5mg, 10vial/kit', price: 455, image: 'StockPhotos/TB-500/TB-5005mgKit (1).png', quantity: 10 },
        { size: 'BT10 - 10mg (1 vial) - Coming Soon', price: 78, image: 'StockPhotos/TB-500/TB10mg.png', comingSoon: true, quantity: 1 },
        { size: 'BT10 - 10mg, 10vial/kit', price: 780, image: 'StockPhotos/TB-500/TB-5005mgKit (2).png', quantity: 10 }
      ],
      note: 'For research purposes only.' },


    // Selank
    { id: 23, name: 'Selank', catNum: 'SK5-SK10', category: 'neurohormones', price: { min: 16, max: 214 }, image: 'StockPhotos/Selank/Selank5mg.png', badge: 'Cognitive', popularity: 6,
      description: 'Synthetic tuftsin analog for cognitive research. Anxiolytic and nootropic peptide studies.',
      features: ['Cognitive research', 'Anxiolytic studies', 'Research grade', 'Synthetic analog'],
      defaultSize: 'SK5 - 5mg (1 vial) - Coming Soon', // Specify default size (5mg individual vial)
      sizes: [
        { size: 'SK5 - 5mg (1 vial) - Coming Soon', price: 16, image: 'StockPhotos/Selank/Selank5mg.png', comingSoon: true, quantity: 1 },
        { size: 'SK5 - 5mg, 10vial/kit', price: 156, image: 'StockPhotos/Selank/Selank5mgKit (2).png', quantity: 10 },
        { size: 'SK10 - 10mg (1 vial) - Coming Soon', price: 22, image: 'StockPhotos/Selank/Selank10mg.png', comingSoon: true, quantity: 1 },
        { size: 'SK10 - 10mg, 10vial/kit', price: 214, image: 'StockPhotos/Selank/Selank10mgKit (3).png', quantity: 10 }
      ],
      note: 'For research purposes only.' },

    // Semax
    { id: 24, name: 'Semax', catNum: 'XA5-XA10', category: 'neurohormones', price: { min: 13, max: 205 }, image: 'StockPhotos/Semax/Semax5mg.png', badge: 'Cognitive', popularity: 6,
      description: 'ACTH analog for cognitive enhancement research. Nootropic peptide for neurological studies.',
      features: ['Cognitive enhancement', 'Neurological research', 'ACTH analog', 'Research grade'],
      defaultSize: 'XA5 - 5mg (1 vial) - Coming Soon', // Specify default size (5mg individual vial)
      sizes: [
        { size: 'XA5 - 5mg (1 vial) - Coming Soon', price: 13, image: 'StockPhotos/Semax/Semax5mg.png', comingSoon: true, quantity: 1 },
        { size: 'XA5 - 5mg, 10vial/kit', price: 127, image: 'StockPhotos/Semax/Semax5mgKit.png', quantity: 10 },
        { size: 'XA10 - 10mg (1 vial) - Coming Soon', price: 21, image: 'StockPhotos/Semax/Semax10mg.png', comingSoon: true, quantity: 1 },
        { size: 'XA10 - 10mg, 10vial/kit', price: 205, image: 'StockPhotos/Semax/Semax10mgKit.png', quantity: 10 }
      ],
      note: 'For research purposes only.' },



    // GHK-Cu
    { id: 28, name: 'GHK-Cu', catNum: 'CU50-CU100', category: 'healing-peptides', price: { min: 18, max: 351 }, image: 'StockPhotos/GHK/Gk50mg.png', badge: 'Healing', popularity: 7,
      description: 'Copper peptide for tissue repair research. Wound healing and anti-aging studies.',
      features: ['Tissue repair', 'Copper complex', 'Anti-aging research', 'Wound healing'],
      defaultSize: 'GHK50 - 50mg (1 vial) - Coming Soon', // Specify default size (50mg individual vial)
      sizes: [
        { size: 'GHK50 - 50mg (1 vial) - Coming Soon', price: 18, image: 'StockPhotos/GHK/Gk50mg.png', comingSoon: true, quantity: 1 },
        { size: 'GHK50 - 50mg, 10vial/kit', price: 176, image: 'StockPhotos/GHK/GHK50mgKit.png', quantity: 10 },
        { size: 'GHK100 - 100mg (1 vial) - Coming Soon', price: 36, image: 'StockPhotos/GHK/GHK100mg.png', comingSoon: true, quantity: 1 },
        { size: 'GHK100 - 100mg, 10vial/kit', price: 351, image: 'StockPhotos/GHK/GHK100mgKit.png', quantity: 10 }
      ],
      note: 'For research purposes only.' },

    // GHRP-6
    { id: 29, name: 'GHRP-6', catNum: 'G65-G610', category: 'growth-hormones', price: { min: 18, max: 195 }, image: 'StockPhotos/GHRP/GHRP5mg.png', badge: 'Growth', popularity: 6,
      description: 'Growth hormone releasing peptide for GH research. Hexapeptide growth hormone secretagogue.',
      features: ['GH release', 'Hexapeptide', 'Growth research', 'Research grade'],
      defaultSize: 'G65 - 5mg (1 vial) - Coming Soon', // Specify default size (5mg individual vial)
      sizes: [
        { size: 'G65 - 5mg (1 vial) - Coming Soon', price: 18, image: 'StockPhotos/GHRP/GHRP5mg.png', comingSoon: true, quantity: 1 },
        { size: 'G65 - 5mg, 10vial/kit', price: 176, image: 'StockPhotos/GHRP/GHRP5mgKit.png', quantity: 10 },
        { size: 'G610 - 10mg (1 vial) - Coming Soon', price: 20, image: 'StockPhotos/GHRP/GHRP10mg.png', comingSoon: true, quantity: 1 },
        { size: 'G610 - 10mg, 10vial/kit', price: 195, image: 'StockPhotos/GHRP/GHRP10mgKit.png', quantity: 10 }
      ],
      note: 'For research purposes only.' },



    // Glow - Premium Healing Blend
    { id: 63, name: 'Glow', catNum: 'BBG70', category: 'healing-peptides', price: { min: 55, max: 536 }, image: 'StockPhotos/Glow/GLOW70mg.png', badge: 'Blend', popularity: 9,
      description: 'Premium 3-peptide healing blend for comprehensive research. 70mg total per vial: BPC-157 10mg + GHK-CU 50mg + TB500 10mg.',
      features: ['3-peptide healing blend', 'BPC-157 10mg', 'GHK-CU 50mg + TB500 10mg', '70mg total per vial'],
      defaultSize: 'BBG70 - 70mg (1 vial) - Coming Soon', // Specify default size (70mg individual vial)
      // KEVIN'S PRICING FORMULA APPLIED:
        // VendorPricePerKit = 218.00 (from Kevin's pricing)
        // VialsPerKit = 10
        // FACTOR_SINGLE = 2.5, FACTOR_KIT = 2.5, KIT_DISCOUNT = 0.025
        // Cost_per_vial = 218 / 10 = 21.8
        // Single_Vial_Retail = round(21.8 * 2.5) = 55
        // Kit_Retail_candidate_A = round(218 * 2.5) = 545
        // Kit_Retail_candidate_B = round(55 * 10 * 0.975) = 536
        // Kit_Retail = min(545, 536) = 536
        sizes: [
          { size: 'BBG70 - 70mg (1 vial) - Coming Soon', price: 55, image: 'StockPhotos/Glow/GLOW70mg.png', comingSoon: true, quantity: 1 },
          { size: 'BBG70 - 70mg, 10vial/kit', price: 536, image: 'StockPhotos/Glow/GLOW70mgKit.png', quantity: 10 }
        ],
      note: '70mg breakdown: BPC-157 10mg + GHK-CU 50mg + TB500 10mg per vial. For research purposes only.' },



    // Melatonin (injectable)
    { id: 34, name: 'Melatonin (Injectable)', catNum: 'MT1', category: 'neurohormones', price: { min: 18, max: 176 }, image: 'StockPhotos/Mela/Melatonin5mg.png', badge: 'Neurohormone', popularity: 6,
      description: 'Injectable melatonin for circadian rhythm research. Sleep-wake cycle and chronobiology studies.',
      features: ['Circadian research', 'Sleep studies', 'Chronobiology', 'Injectable form'],
      defaultSize: 'MT1 - 5mg (1 vial) - Coming Soon', // Specify default size (5mg individual vial)
      sizes: [
        { size: 'MT1 - 5mg (1 vial) - Coming Soon', price: 18, image: 'StockPhotos/Mela/Melatonin5mg.png', comingSoon: true, quantity: 1 },
        { size: 'MT1 - 5mg, 10vial/kit', price: 176, image: 'StockPhotos/Mela/Mela5mgKit.png', quantity: 10 }
      ],
      note: 'For research purposes only.' },





    // Thymosin Alpha-1
    { id: 43, name: 'Thymosin Alpha-1', catNum: 'TA5-TA10', category: 'longevity', price: { min: 28, max: 468 }, image: 'StockPhotos/Thymo/Thmosin5mg.png', badge: 'Longevity', popularity: 6,
      description: 'Thymosin peptide for immune research. T-cell function and immunotherapy studies.',
      features: ['Immune research', 'T-cell function', 'Immunotherapy', 'Research grade'],
      defaultSize: 'TA5 - 5mg (1 vial) - Coming Soon', // Specify default size (5mg individual vial)
      sizes: [
        { size: 'TA5 - 5mg (1 vial) - Coming Soon', price: 28, image: 'StockPhotos/Thymo/Thmosin5mg.png', comingSoon: true, quantity: 1 },
        { size: 'TA5 - 5mg, 10vial/kit', price: 273, image: 'StockPhotos/Thymo/Thymosin5mgKit.png', quantity: 10 },
        { size: 'TA10 - 10mg (1 vial) - Coming Soon', price: 48, image: 'StockPhotos/Thymo/Thymo10mg.png', comingSoon: true, quantity: 1 },
        { size: 'TA10 - 10mg, 10vial/kit', price: 468, image: 'StockPhotos/Thymo/Thymosin10mgKit.png', quantity: 10 }
      ],
      note: 'For research purposes only.' },



];

let currentCategory = 'all';
let currentSearchTerm = '';
let cart = JSON.parse(localStorage.getItem('schawlabs-cart')) || [];
let appliedDiscount = JSON.parse(localStorage.getItem('schawlabs-applied-discount')) || null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    initializeEventListeners();
    showSection('home'); // Show home page by default
});

// Event Listeners
function initializeEventListeners() {
    // Category filtering
    categoryItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            filterProducts(category);
        });
    });

    // Add event listeners for navigation
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                const sectionId = href.substring(1);
                showSection(sectionId);
            }
        });
    });
}

// Show specific section
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.home-section, .products-section-page, .content-section, .product-detail-section').forEach(section => {
        section.style.display = 'none';
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
        targetSection.classList.add('active');
        
        // If showing products section, render products
        if (sectionId === 'products') {
            renderProducts();
        }
        
        // If showing cart section, render cart page
        if (sectionId === 'cart') {
            renderCartPage();
        }
        
        // Scroll to very top to avoid header cutoff
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 50);
    }
}

// Global function to show products by category
window.showProducts = function(category) {
    showLoading();
    
    // Simulate loading time for better UX
    setTimeout(() => {
    showSection('products');
    if (category && category !== 'all') {
        filterProducts(category);
    } else {
        renderProducts();
    }
        hideLoading();
    }, 300);
};

// Filter products by category
function filterProducts(category) {
    currentCategory = category;
    
    // Update active category
    categoryItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-category') === category) {
            item.classList.add('active');
        }
    });
    
    renderProducts();
}

// Render products
function renderProducts() {
    if (!productsGrid) return;
    
    let filteredProducts = products;
    
    // Filter by category
    if (currentCategory !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === currentCategory);
    }
    
    // Filter by search term
    if (currentSearchTerm) {
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(currentSearchTerm.toLowerCase())
        );
    }
    
    // Sort by popularity
    filteredProducts.sort((a, b) => b.popularity - a.popularity);
    
    // Render products
    productsGrid.innerHTML = filteredProducts.map(product => createProductCard(product)).map(card => card.outerHTML).join('');
    
    // Add event listeners to new cards
    addSelectOptionsListeners();
}

// Create product card HTML
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-category', product.category);
    
    const badgeHTML = product.badge ? `<div class="product-badge">${product.badge}</div>` : '';
    
    // Handle empty images with placeholder
    const imageHTML = product.image ? 
        `<img src="${product.image}" alt="${product.name}">` :
        `<div class="product-image-placeholder">
            <i class="fas fa-vial"></i>
            <span>Photo Coming Soon</span>
        </div>`;
    
    card.innerHTML = `
        <div class="product-image">
            ${imageHTML}
            ${badgeHTML}
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <div class="product-price">
                <span class="price-range">$${product.price.min}.00 - $${product.price.max}.00</span>
            </div>
            <div class="product-actions">
                <button class="select-options-btn" data-product-id="${product.id}">View Details</button>
                <button class="add-to-cart-btn" data-product-id="${product.id}" onclick="quickAddToCart(${product.id})">
                    <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// Add event listeners to select options buttons
function addSelectOptionsListeners() {
    const selectButtons = document.querySelectorAll('.select-options-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    selectButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const productId = parseInt(this.getAttribute('data-product-id'));
            const product = products.find(p => p.id === productId);
            if (product) {
                showProductDetail(product);
            }
        });
    });
    
    // Add click listeners to product cards for detail view
    productCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.closest('.product-actions')) return;
            const productId = parseInt(this.querySelector('.select-options-btn').getAttribute('data-product-id'));
            const product = products.find(p => p.id === productId);
            if (product) {
                showProductDetail(product);
            }
        });
    });
}

// Show product detail page
function showProductDetail(product) {
    // Add to recently viewed
    addToRecentlyViewed(product.id);
    
    // Hide all sections
    document.querySelectorAll('.home-section, .products-section-page, .content-section').forEach(section => {
        section.style.display = 'none';
    });
    
    // Show product detail section
    const productDetailSection = document.querySelector('.product-detail-section');
    if (productDetailSection) {
        productDetailSection.style.display = 'block';
        populateProductDetail(product);
        populateRelatedProducts(product);
        
        // Scroll to top smoothly
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// Populate product detail page
function populateProductDetail(product) {
    // Set current product ID for cart functionality
    window.currentProductId = product.id;
    
    // Update breadcrumbs
    const breadcrumbs = document.querySelector('.breadcrumbs');
    if (breadcrumbs) {
        breadcrumbs.innerHTML = `
            <a href="#" onclick="showSection('home')">Home</a> > 
            <a href="#" onclick="showSection('products')">Products</a> > 
            <span>${product.name}</span>
        `;
    }
    
    // Update main image - use default size image or fallback
    const mainImage = document.getElementById('main-product-image');
    if (mainImage) {
        let defaultImage = product.image;
        
        // If product has a default size specified, use that size's image
        if (product.defaultSize && product.sizes) {
            const defaultSizeData = product.sizes.find(s => s.size === product.defaultSize);
            if (defaultSizeData && defaultSizeData.image) {
                defaultImage = defaultSizeData.image;
            }
        }
        // Otherwise, use the first size's image if available
        else if (product.sizes && product.sizes.length > 0 && product.sizes[0].image) {
            defaultImage = product.sizes[0].image;
        }
        
        mainImage.src = defaultImage || getComingSoonImage();
        mainImage.alt = product.name;
    }
    
    // Update product title and description
    const productTitle = document.querySelector('.product-info-detail h1');
    if (productTitle) {
        if (product.id === 3) { // Retatrutide
            productTitle.innerHTML = `${product.name} <span class="regulatory-note">(Due to regulations, labeled as GLP-3 RT)</span>`;
        } else {
            productTitle.textContent = product.name;
        }
    }
    
    const productDescription = document.querySelector('.product-description p');
    if (productDescription) {
        productDescription.textContent = product.description || `${product.name} is a high-quality research compound for laboratory use only.`;
    }
    
    // Update features
    const featuresList = document.querySelector('.product-features ul');
    if (featuresList && product.features) {
        featuresList.innerHTML = product.features.map(feature => `<li>${feature}</li>`).join('');
    }
    
    // Update price
    const priceElement = document.querySelector('.product-pricing .price');
    if (priceElement) {
        priceElement.textContent = `$${product.price.min}.00 - $${product.price.max}.00`;
    }
    
    // Update compliance note
    const complianceNote = document.querySelector('.compliance-note');
    if (complianceNote) {
        complianceNote.textContent = product.note || 'For research purposes only. Not for human consumption.';
    }
    
    // Update size options
    const sizeSelect = document.getElementById('size-select');
    if (sizeSelect && product.sizes) {
        sizeSelect.innerHTML = '<option value="">Select Size</option>' + 
            product.sizes.map(size => 
                `<option value="${size.size}" data-price="${size.price}">${size.size} - $${size.price}.00</option>`
            ).join('');
        
        // Set default size if specified
        if (product.defaultSize) {
            sizeSelect.value = product.defaultSize;
            
            // Update button state for default size
            const addToCartBtn = document.querySelector('.add-to-cart-btn');
            if (addToCartBtn) {
                const defaultSizeData = product.sizes.find(s => s.size === product.defaultSize);
                if (defaultSizeData && defaultSizeData.comingSoon) {
                    addToCartBtn.disabled = true;
                    addToCartBtn.style.opacity = '0.5';
                    addToCartBtn.textContent = 'Coming Soon';
                } else {
                    addToCartBtn.disabled = false;
                    addToCartBtn.style.opacity = '1';
                    addToCartBtn.textContent = 'Add to cart';
                }
            }
        } else {
            // No size selected initially, disable button
            const addToCartBtn = document.querySelector('.add-to-cart-btn');
            if (addToCartBtn) {
                addToCartBtn.disabled = true;
                addToCartBtn.style.opacity = '0.5';
                addToCartBtn.textContent = 'Add to cart';
            }
        }
        
        // Add change listener for price updates and image changes
        sizeSelect.addEventListener('change', function() {
            const selectedOption = this.options[this.selectedIndex];
            const price = selectedOption.getAttribute('data-price');
            const selectedSize = this.value;
            
            console.log('Size changed to:', selectedSize); // Debug log
            
            if (price) {
                const priceElement = document.querySelector('.product-pricing .price');
                if (priceElement) {
                    priceElement.textContent = `$${price}.00`;
                }
            }
            
            // Update image based on selected size
            if (selectedSize) {
                const sizeData = product.sizes.find(s => s.size === selectedSize);
                const mainImage = document.getElementById('main-product-image');
                
                if (mainImage && sizeData) {
                    if (sizeData.image) {
                        // Always show the actual product image, regardless of coming soon status
                        mainImage.src = sizeData.image;
                        mainImage.alt = `${product.name} - ${selectedSize}`;
                    } else {
                        // Fallback to product default image
                        let fallbackImage = product.image;
                        if (product.defaultSize && product.sizes) {
                            const defaultSizeData = product.sizes.find(s => s.size === product.defaultSize);
                            if (defaultSizeData && defaultSizeData.image) {
                                fallbackImage = defaultSizeData.image;
                            }
                        }
                        mainImage.src = fallbackImage || getComingSoonImage();
                        mainImage.alt = `${product.name} - ${selectedSize}`;
                    }
                }
            }
            
            // Enable/disable add to cart button based on availability
            const addToCartBtn = document.querySelector('.add-to-cart-btn');
            console.log('Add to cart button found:', addToCartBtn); // Debug log
            
            if (addToCartBtn && selectedSize) {
                const sizeData = product.sizes.find(s => s.size === selectedSize);
                console.log('Size data:', sizeData); // Debug log
                
                if (sizeData && sizeData.comingSoon) {
                    console.log('Disabling button - Coming Soon'); // Debug log
                    addToCartBtn.disabled = true;
                    addToCartBtn.style.opacity = '0.5';
                    addToCartBtn.style.cursor = 'not-allowed';
                    addToCartBtn.style.background = '#9ca3af';
                    addToCartBtn.textContent = 'Coming Soon';
                    addToCartBtn.classList.add('disabled-coming-soon');
                } else {
                    console.log('Enabling button - Available'); // Debug log
                    addToCartBtn.disabled = false;
                    addToCartBtn.style.opacity = '1';
                    addToCartBtn.style.cursor = 'pointer';
                    addToCartBtn.style.background = '';
                    addToCartBtn.textContent = 'Add to cart';
                    addToCartBtn.classList.remove('disabled-coming-soon');
                }
            } else if (addToCartBtn) {
                console.log('No size selected - Disabling button'); // Debug log
                addToCartBtn.disabled = true;
                addToCartBtn.style.opacity = '0.5';
                addToCartBtn.style.cursor = 'not-allowed';
                addToCartBtn.textContent = 'Add to cart';
            }
        });
    }
}

// Change quantity in product detail
window.changeQuantity = function(change) {
    const quantityInput = document.getElementById('quantity-input');
    if (quantityInput) {
        const currentValue = parseInt(quantityInput.value) || 1;
        const newValue = Math.max(1, currentValue + change);
        quantityInput.value = newValue;
    }
};

// Add product to cart from detail page
window.addProductToCart = function() {
    const sizeSelect = document.getElementById('size-select');
    const quantityInput = document.getElementById('quantity-input');
    
    if (!sizeSelect.value) {
        showToast('Size Required', 'Please select a size before adding to cart.', 'warning');
        return;
    }
    
    const product = products.find(p => p.id === window.currentProductId);
    if (!product) {
        showToast('Error', 'Product not found. Please try again.', 'error');
        return;
    }
    
    // Check if selected size is coming soon
    const selectedSize = sizeSelect.value;
    const sizeData = product.sizes.find(s => s.size === selectedSize);
    if (sizeData && sizeData.comingSoon) {
        showToast('Coming Soon', 'This item is not yet available for purchase.', 'info');
        return;
    }
    
    const selectedOption = sizeSelect.options[sizeSelect.selectedIndex];
    const price = parseInt(selectedOption.getAttribute('data-price'));
    const quantity = parseInt(quantityInput.value);
    
    const cartItem = {
        id: Date.now(),
        productId: product.id,
        name: product.name,
        size: selectedSize, // Store the full size string for proper display
        fullSize: selectedSize, // Store the full size string for image matching
        price: price,
        quantity: quantity
    };
    
    cart.push(cartItem);
    localStorage.setItem('schawlabs-cart', JSON.stringify(cart));
    updateCartCount();
    
    // Show success toast instead of immediately navigating
    showToast('Added to Cart', `${quantity}x ${product.name} (${cartItem.size}) added to cart.`, 'success');
    
    // Optional: Navigate to cart after a short delay
    // setTimeout(() => showSection('cart'), 1500);
};

// Quick add to cart from product catalog
window.quickAddToCart = function(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Create modal for size selection
    const modal = document.createElement('div');
    modal.className = 'quick-add-modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeQuickAddModal()"></div>
        <div class="modal-content">
            <div class="modal-header">
                <h3>Add ${product.name} to Cart</h3>
                <button class="modal-close" onclick="closeQuickAddModal()">×</button>
            </div>
            <div class="modal-body">
                <div class="product-summary">
                    <div class="product-image-placeholder">
                        <i class="fas fa-vial"></i>
                    </div>
                    <div class="product-details">
                        <h4>${product.name}</h4>
                        <p class="price-range">$${product.price.min}.00 - $${product.price.max}.00</p>
                        <p class="product-note">Research use only</p>
                    </div>
                </div>
                <div class="size-selection">
                    <label>Select Size:</label>
                    <select id="quick-size-select" required>
                        <option value="">Choose size...</option>
                        ${product.sizes ? product.sizes.map(size => 
                            `<option value="${size.size}" data-price="${size.price}">${size.size} - $${size.price}.00</option>`
                        ).join('') : '<option value="5mg" data-price="' + product.price.min + '">5mg - $' + product.price.min + '.00</option>'}
                    </select>
                </div>
                <div class="quantity-selection">
                    <label>Quantity:</label>
                    <div class="quantity-controls">
                        <button type="button" onclick="changeQuickQuantity(-1)">-</button>
                        <input type="number" id="quick-quantity" value="1" min="1">
                        <button type="button" onclick="changeQuickQuantity(1)">+</button>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="cancel-btn" onclick="closeQuickAddModal()">Cancel</button>
                <button class="add-btn" onclick="confirmQuickAdd(${productId})">Add to Cart</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
};

window.closeQuickAddModal = function() {
    const modal = document.querySelector('.quick-add-modal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = '';
    }
};

window.changeQuickQuantity = function(change) {
    const quantityInput = document.getElementById('quick-quantity');
    const currentValue = parseInt(quantityInput.value);
    const newValue = Math.max(1, currentValue + change);
    quantityInput.value = newValue;
};

window.confirmQuickAdd = function(productId) {
    const sizeSelect = document.getElementById('quick-size-select');
    const quantityInput = document.getElementById('quick-quantity');
    
    if (!sizeSelect.value) {
        alert('Please select a size');
        return;
    }
    
    const product = products.find(p => p.id === productId);
    const selectedOption = sizeSelect.options[sizeSelect.selectedIndex];
    const price = parseInt(selectedOption.getAttribute('data-price'));
    const quantity = parseInt(quantityInput.value);
    
    const cartItem = {
        id: Date.now(),
        productId: product.id,
        name: product.name,
        size: selectedOption.textContent.split(' - ')[0],
        price: price,
        quantity: quantity
    };
    
    cart.push(cartItem);
    localStorage.setItem('schawlabs-cart', JSON.stringify(cart));
    updateCartCount();
    
    closeQuickAddModal();
    showSection('cart');
};

// Smart Search Dropdown Functionality
function initializeSmartSearch() {
    const searchInput = document.getElementById('search-input');
    const searchDropdown = document.getElementById('search-dropdown');
    let searchTimeout;

    if (!searchInput || !searchDropdown) return;

    // Search function
    function performSearch(query) {
        if (!query.trim()) {
            searchDropdown.classList.remove('show');
            return;
        }

        const results = products.filter(product => 
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 5); // Limit to 5 results

        displaySearchResults(results, query);
    }

    // Display search results
    function displaySearchResults(results, query) {
        if (results.length === 0) {
            searchDropdown.innerHTML = `
                <div class="search-no-results">
                    <i class="fas fa-search"></i>
                    No products found for "${query}"
                </div>
            `;
        } else {
            searchDropdown.innerHTML = results.map(product => `
                <div class="search-item" onclick="selectSearchItem(${product.id})">
                    <div class="search-item-image">
                        ${product.image ? 
                            `<img src="${product.image}" alt="${product.name}" />` : 
                            `<div class="search-placeholder">
                        <i class="fas fa-vial"></i>
                            </div>`
                        }
                    </div>
                    <div class="search-item-details">
                        <div class="search-item-name">${product.name}</div>
                        <div class="search-item-category">${product.badge || product.category}</div>
                    </div>
                    <div class="search-item-price">$${product.price.min}-$${product.price.max}</div>
                </div>
            `).join('');
        }
        
        searchDropdown.classList.add('show');
    }

    // Handle search input
    searchInput.addEventListener('input', function(e) {
        clearTimeout(searchTimeout);
        const query = e.target.value;
        
        searchTimeout = setTimeout(() => {
            performSearch(query);
        }, 200); // Debounce search
    });

    // Handle focus
    searchInput.addEventListener('focus', function() {
        if (this.value.trim()) {
            performSearch(this.value);
        }
    });

    // Handle blur (hide dropdown after a delay)
    searchInput.addEventListener('blur', function() {
        setTimeout(() => {
            searchDropdown.classList.remove('show');
        }, 200);
    });

    // Handle Enter key
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            const firstResult = searchDropdown.querySelector('.search-item');
            if (firstResult) {
                firstResult.click();
            }
        }
    });
}

// Select search item function
window.selectSearchItem = function(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        // Clear search
        document.getElementById('search-input').value = '';
        document.getElementById('search-dropdown').classList.remove('show');
        
        // Go to product detail page
        showProductDetail(product);
    }
};

// Cart Management Functions
function renderCartPage() {
    const cartItemsContainer = document.getElementById('cart-items-container');
    const emptyCart = document.getElementById('empty-cart');
    const cartContent = document.querySelector('.cart-content');
    
    if (cart.length === 0) {
        cartContent.style.display = 'none';
        emptyCart.style.display = 'block';
        return;
    }
    
    cartContent.style.display = 'grid';
    emptyCart.style.display = 'none';
    
    cartItemsContainer.innerHTML = cart.map(item => {
        const product = products.find(p => p.id === item.productId);
        
        // Find the specific size data to get the correct image
        let productImage = product?.image || '';
        if (product && product.sizes) {
            // First try exact match with fullSize
            let sizeData = product.sizes.find(s => s.size === item.fullSize);
            
            // If no exact match, try to find by matching the size string
            if (!sizeData) {
                sizeData = product.sizes.find(s => s.size === item.size);
            }
            
            if (sizeData && sizeData.image) {
                productImage = sizeData.image;
            } else if (product.defaultSize) {
                const defaultSizeData = product.sizes.find(s => s.size === product.defaultSize);
                if (defaultSizeData && defaultSizeData.image) {
                    productImage = defaultSizeData.image;
                }
            }
        }
        
        return `
            <div class="cart-item" data-item-id="${item.id}">
                <div class="cart-item-image">
                    ${productImage ? 
                        `<img src="${productImage}" alt="${item.name} - ${item.size}" />` : 
                        `<i class="fas fa-vial"></i>`
                    }
                </div>
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p>Size: ${item.size}</p>
                    <p>Research compound - Laboratory use only</p>
                </div>
                <div class="cart-item-price">$${item.price}.00</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, -1)">-</button>
                    <input type="number" class="quantity-input" value="${item.quantity}" min="1" 
                           onchange="setCartQuantity(${item.id}, this.value)">
                    <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, 1)">+</button>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
    }).join('');
    
    updateCartSummary();
}

function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal >= 150 ? 0 : 15;
    
    // Apply discount if available
    let discount = 0;
    if (appliedDiscount) {
        if (appliedDiscount.type === 'percentage') {
            discount = Math.round(subtotal * (appliedDiscount.value / 100));
        } else if (appliedDiscount.type === 'fixed') {
            discount = Math.min(appliedDiscount.value, subtotal); // Don't exceed subtotal
        }
    }
    
    const total = subtotal + shipping - discount;
    
    document.getElementById('cart-subtotal').textContent = `$${subtotal}.00`;
    document.getElementById('cart-shipping').textContent = shipping === 0 ? 'Free' : `$${shipping}.00`;
    
    // Show/hide discount line
    const discountLine = document.getElementById('discount-line');
    if (discount > 0) {
        discountLine.style.display = 'flex';
        document.getElementById('applied-discount-code').textContent = appliedDiscount.code;
        document.getElementById('cart-discount').textContent = `-$${discount}.00`;
    } else {
        discountLine.style.display = 'none';
    }
    
    document.getElementById('cart-total').textContent = `$${total}.00`;
}

window.updateCartQuantity = function(itemId, change) {
    const item = cart.find(item => item.id === itemId);
    if (item) {
        item.quantity = Math.max(1, item.quantity + change);
        localStorage.setItem('schawlabs-cart', JSON.stringify(cart));
        updateCartCount();
        renderCartPage();
    }
};

window.setCartQuantity = function(itemId, quantity) {
    const item = cart.find(item => item.id === itemId);
    if (item) {
        item.quantity = Math.max(1, parseInt(quantity));
        localStorage.setItem('schawlabs-cart', JSON.stringify(cart));
        updateCartCount();
        renderCartPage();
    }
};

window.removeFromCart = function(itemId) {
    const itemIndex = cart.findIndex(item => item.id === itemId);
    if (itemIndex > -1) {
        cart.splice(itemIndex, 1);
        localStorage.setItem('schawlabs-cart', JSON.stringify(cart));
        
        // Clear discount if cart becomes empty
        if (cart.length === 0 && appliedDiscount) {
            appliedDiscount = null;
            localStorage.removeItem('schawlabs-applied-discount');
        }
        
        updateCartCount();
        renderCartPage();
    }
};

window.proceedToCheckout = function() {
    alert('Checkout functionality would be implemented here. This would typically redirect to a secure payment processor.');
};

// FAQ Toggle Function
window.toggleFAQ = function(questionElement) {
    const faqItem = questionElement.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Close all other FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Toggle current item
    if (!isActive) {
        faqItem.classList.add('active');
    }
};

// Modern Header Scroll Effect
document.addEventListener('DOMContentLoaded', function() {
    // Initialize smart search
    initializeSmartSearch();
    
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }
    
    // Throttle scroll events for better performance
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // Add loading animation for product images
    const images = document.querySelectorAll('.product-image img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
});

// Update cart count
function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

// Show notification (utility function)
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--primary-blue);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add CSS for notifications
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(notificationStyles);



// ===== ENHANCED E-COMMERCE FEATURES =====

// Generate Coming Soon placeholder image
function getComingSoonImage() {
    return 'data:image/svg+xml;base64,' + btoa(`
        <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="#f8fafc"/>
            <rect x="50" y="50" width="300" height="300" fill="#ffffff" stroke="#e2e8f0" stroke-width="2" rx="16"/>
            <circle cx="200" cy="160" r="30" fill="#1e3a8a" opacity="0.1"/>
            <path d="M185 145 L185 175 M200 130 L200 190 M215 145 L215 175" stroke="#1e3a8a" stroke-width="3" stroke-linecap="round" opacity="0.3"/>
            <text x="200" y="240" font-family="Arial, sans-serif" font-size="18" fill="#6b7280" text-anchor="middle" font-weight="600">Coming Soon</text>
            <text x="200" y="265" font-family="Arial, sans-serif" font-size="14" fill="#9ca3af" text-anchor="middle">Image Available Soon</text>
        </svg>
    `);
}

// Helper function to set up product with default size and coming soon sizes
// Usage: setupProductSizes(productId, defaultSize, availableSizes, comingSoonSizes)
function setupProductSizes(productId, defaultSize, availableSizes = [], comingSoonSizes = []) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    product.defaultSize = defaultSize;
    
    // Mark available sizes
    availableSizes.forEach(sizeInfo => {
        const size = product.sizes.find(s => s.size === sizeInfo.size);
        if (size) {
            size.image = sizeInfo.image;
            delete size.comingSoon;
        }
    });
    
    // Mark coming soon sizes
    comingSoonSizes.forEach(sizeName => {
        const size = product.sizes.find(s => s.size === sizeName);
        if (size) {
            size.comingSoon = true;
            delete size.image;
        }
    });
}

// Easy helper to add new Retatrutide size images
// Usage: addRetaImage('15mg') when you add Reta15mg.png to the Reta folder
function addRetaImage(sizeValue) {
    const product = products.find(p => p.id === 3); // Retatrutide
    if (!product) return;
    
    const size = product.sizes.find(s => s.size === sizeValue);
    if (size) {
        size.image = `StockPhotos/Reta/Reta${sizeValue}.png`;
        delete size.comingSoon;
        console.log(`Added Reta${sizeValue}.png image for ${sizeValue} size`);
    }
}

// Generic helper for any product
// Usage: addProductSizeImage(productId, 'FolderName', '15mg')
function addProductSizeImage(productId, folderName, sizeValue) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const size = product.sizes.find(s => s.size === sizeValue);
    if (size) {
        const productPrefix = product.name.replace(/[^a-zA-Z0-9]/g, ''); // Remove special chars
        size.image = `StockPhotos/${folderName}/${productPrefix}${sizeValue}.png`;
        delete size.comingSoon;
        console.log(`Added ${productPrefix}${sizeValue}.png image for ${product.name} ${sizeValue} size`);
    }
}

// Loading State Management
function showLoading() {
    if (loadingState) {
        loadingState.style.display = 'block';
    }
    if (productsGrid) {
        productsGrid.style.display = 'none';
    }
}

function hideLoading() {
    if (loadingState) {
        loadingState.style.display = 'none';
    }
    if (productsGrid) {
        productsGrid.style.display = 'grid';
    }
}

// Recently Viewed Products Management
function addToRecentlyViewed(productId) {
    try {
        if (!productId) return;
        
        let recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
        
        // Remove if already exists
        recentlyViewed = recentlyViewed.filter(id => id !== productId);
        
        // Add to beginning
        recentlyViewed.unshift(productId);
        
        // Keep only last 6 items
        recentlyViewed = recentlyViewed.slice(0, 6);
        
        localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
        updateRecentlyViewedDisplay();
    } catch (error) {
        console.error('Error adding to recently viewed:', error);
    }
}

function updateRecentlyViewedDisplay() {
    try {
        const recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
        
        if (recentlyViewed.length === 0 || !recentlyViewedGrid) {
            if (recentlyViewedSection) {
                recentlyViewedSection.style.display = 'none';
            }
            return;
        }
        
        if (recentlyViewedSection) {
            recentlyViewedSection.style.display = 'block';
        }
        
        const recentProducts = recentlyViewed
            .map(id => products.find(p => p.id === parseInt(id)))
            .filter(Boolean);
        
        if (recentProducts.length === 0) {
            if (recentlyViewedSection) {
                recentlyViewedSection.style.display = 'none';
            }
            return;
        }
        
        recentlyViewedGrid.innerHTML = recentProducts.map(product => `
            <div class="recently-viewed-item" onclick="showProductDetail(products.find(p => p.id === ${product.id}))">
                <div class="image-container">
                    <img src="${product.image || 'https://via.placeholder.com/200x150?text=' + encodeURIComponent(product.name)}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h4>${product.name}</h4>
                    <div class="price">$${product.price.min} - $${product.price.max}</div>
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error updating recently viewed display:', error);
        if (recentlyViewedSection) {
            recentlyViewedSection.style.display = 'none';
        }
    }
}



// Video Splash Screen Functionality
const videoSplash = document.getElementById('video-splash');
const introVideo = document.getElementById('intro-video');
const mainContent = document.getElementById('main-content');

// Check if user has already seen the cinematic opening in this session
const hasSeenOpening = sessionStorage.getItem('hasSeenCinematicOpening');
const chatButton = document.getElementById('chat-button');

// Only show splash screen if user hasn't seen it in this session
if (videoSplash && !hasSeenOpening) {
    // Add splash-active class to body to prevent scrolling
    document.body.classList.add('splash-active');
    videoSplash.classList.add('active');
    
    // Hide chat button during cinematic opening
    if (chatButton) {
        chatButton.style.display = 'none';
    }
    
    // Mark that user has seen the opening
    sessionStorage.setItem('hasSeenCinematicOpening', 'true');
} else {
    // Skip directly to main content if already seen
    if (videoSplash) {
        videoSplash.style.display = 'none';
    }
    if (mainContent) {
        mainContent.classList.remove('hidden');
    }
    // Show chat button if skipping opening
    if (chatButton) {
        chatButton.style.display = 'flex';
    }
}

// Handle GIF display - only if showing splash screen
if (introVideo && !hasSeenOpening) {
    // Handle image load error
    introVideo.addEventListener('error', function() {
        console.log('GIF failed to load, skipping to main content');
        transitionToMainContent();
    });
    
    // Auto-transition after 2.5 seconds for 2x speed GIF
    introVideo.addEventListener('load', function() {
        setTimeout(() => {
            transitionToMainContent();
        }, 2500); // 2.5 seconds display time for 2x speed
    });
}

// Skip intro function
function skipIntro() {
    transitionToMainContent();
}

// Transition to main content
function transitionToMainContent() {
    if (videoSplash && mainContent) {
        videoSplash.classList.add('fade-out');
        
        // Remove splash-active class to restore scrolling
        document.body.classList.remove('splash-active');
        videoSplash.classList.remove('active');
        
        setTimeout(() => {
            videoSplash.style.display = 'none';
            mainContent.classList.remove('hidden');
            
            // Show chat button when transitioning to main content
            const chatButton = document.getElementById('chat-button');
            if (chatButton) {
                chatButton.style.display = 'flex';
            }
        }, 500);
    }
}

// Ensure main content is shown if GIF doesn't load within 3 seconds (only if showing splash)
if (!hasSeenOpening) {
    setTimeout(() => {
        if (videoSplash && videoSplash.style.display !== 'none') {
            console.log('GIF timeout, showing main content');
            transitionToMainContent();
        }
    }, 3000);
}

// Toast Notification System
function showToast(title, message, type = 'success', duration = 4000) {
    if (!toastContainer) return;
    
    const toastId = 'toast-' + Date.now();
    const iconMap = {
        success: 'fas fa-check-circle',
        error: 'fas fa-exclamation-circle',
        warning: 'fas fa-exclamation-triangle',
        info: 'fas fa-info-circle'
    };
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.id = toastId;
    toast.innerHTML = `
        <div class="toast-content">
            <i class="toast-icon ${iconMap[type]}"></i>
            <div class="toast-message">
                <div class="toast-title">${title}</div>
                <div class="toast-description">${message}</div>
            </div>
            <button class="toast-close" onclick="removeToast('${toastId}')">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    toastContainer.appendChild(toast);
    
    // Auto remove after duration
    setTimeout(() => removeToast(toastId), duration);
}

function removeToast(toastId) {
    const toast = document.getElementById(toastId);
    if (toast) {
        toast.style.animation = 'slideOutRight 0.3s ease forwards';
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }
}

// Enhanced Add to Cart with Toast - removed duplicate function

// Guest Checkout Function
function guestCheckout() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    if (cart.length === 0) {
        showToast('Empty Cart', 'Please add items to your cart before checkout.', 'warning');
        return;
    }
    
    showToast('Guest Checkout', 'Redirecting to guest checkout...', 'info');
    
    // Simulate checkout process
    setTimeout(() => {
        showToast('Feature Coming Soon', 'Guest checkout will be available soon. Please create an account for now.', 'info', 6000);
    }, 1500);
}

// Enhanced Product Display with Loading - removed duplicate function

// Enhanced Product Detail View - removed duplicate function

// Enhanced Error Handling - Removed global error handler to prevent false positives

// First Time Buyer Discount Popup Functions
function showDiscountPopup() {
    const overlay = document.getElementById('discount-popup-overlay');
    if (overlay) {
        overlay.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeDiscountPopup() {
    const overlay = document.getElementById('discount-popup-overlay');
    if (overlay) {
        overlay.style.display = 'none';
        document.body.style.overflow = ''; // Restore scrolling
        
        // Mark that user has seen the popup
        localStorage.setItem('schawlabs-discount-popup-seen', 'true');
    }
}

function claimDiscount() {
    // Copy discount code to clipboard
    navigator.clipboard.writeText('WELCOME10').then(() => {
        showToast('Discount Code Copied!', 'WELCOME10 has been copied to your clipboard. Use it at checkout for 10% off!', 'success', 5000);
    }).catch(() => {
        // Fallback if clipboard API doesn't work
        showToast('Discount Code: WELCOME10', 'Use code WELCOME10 at checkout for 10% off your first order!', 'success', 5000);
    });
    
    // Close the popup and redirect to products
    closeDiscountPopup();
    
    // Show products section after a short delay
    setTimeout(() => {
        showProducts('all');
    }, 500);
}

function checkFirstTimeVisitor() {
    // Check if user has seen the popup before
    const hasSeenPopup = localStorage.getItem('schawlabs-discount-popup-seen');
    const hasOrderedBefore = localStorage.getItem('schawlabs-has-ordered'); // You can set this after successful orders
    
    // Show popup if it's their first time and they haven't ordered before
    if (!hasSeenPopup && !hasOrderedBefore) {
        // Show popup after 3 seconds to let the page load
        setTimeout(() => {
            showDiscountPopup();
        }, 3000);
    }
}

// Discount Code Functions
const discountCodes = {
    'WELCOME10': { type: 'percentage', value: 10, description: 'Welcome discount - 10% off' },
    'SAVE15': { type: 'percentage', value: 15, description: 'Save 15% on your order' },
    'FIRSTORDER': { type: 'percentage', value: 10, description: 'First order discount - 10% off' },
    'RESEARCH20': { type: 'percentage', value: 20, description: 'Research discount - 20% off' },
    'NEWCUSTOMER': { type: 'percentage', value: 10, description: 'New customer discount - 10% off' }
};

function applyDiscountCode() {
    const input = document.getElementById('discount-code-input');
    const messageDiv = document.getElementById('discount-message');
    const code = input.value.trim().toUpperCase();
    
    if (!code) {
        showDiscountMessage('Please enter a discount code.', 'error');
        return;
    }
    
    // Check if cart is empty
    if (cart.length === 0) {
        showDiscountMessage('Please add items to your cart before applying a discount.', 'error');
        return;
    }
    
    // Check if code exists
    if (!discountCodes[code]) {
        showDiscountMessage('Invalid discount code. Please try again.', 'error');
        return;
    }
    
    // Check if code is already applied
    if (appliedDiscount && appliedDiscount.code === code) {
        showDiscountMessage('This discount code is already applied.', 'info');
        return;
    }
    
    // Apply the discount
    appliedDiscount = {
        code: code,
        type: discountCodes[code].type,
        value: discountCodes[code].value,
        description: discountCodes[code].description
    };
    
    // Save to localStorage
    localStorage.setItem('schawlabs-applied-discount', JSON.stringify(appliedDiscount));
    
    // Update UI
    input.value = '';
    showDiscountMessage(`Success! ${appliedDiscount.description} applied.`, 'success');
    updateCartSummary();
    
    // Show toast notification
    const discountAmount = appliedDiscount.type === 'percentage' ? `${appliedDiscount.value}%` : `$${appliedDiscount.value}`;
    showToast('Discount Applied!', `${code} - ${discountAmount} off your order`, 'success');
}

function removeDiscountCode() {
    if (!appliedDiscount) return;
    
    const removedCode = appliedDiscount.code;
    appliedDiscount = null;
    
    // Remove from localStorage
    localStorage.removeItem('schawlabs-applied-discount');
    
    // Update UI
    updateCartSummary();
    showDiscountMessage('', 'info'); // Clear message
    
    // Show toast notification
    showToast('Discount Removed', `${removedCode} has been removed from your order`, 'info');
}

function showDiscountMessage(message, type) {
    const messageDiv = document.getElementById('discount-message');
    if (!message) {
        messageDiv.style.display = 'none';
        return;
    }
    
    messageDiv.textContent = message;
    messageDiv.className = `discount-message ${type}`;
    messageDiv.style.display = 'block';
    
    // Auto-hide success and info messages after 3 seconds
    if (type === 'success' || type === 'info') {
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 3000);
    }
}

// Allow Enter key to apply discount
document.addEventListener('keypress', function(e) {
    if (e.target.id === 'discount-code-input' && e.key === 'Enter') {
        applyDiscountCode();
    }
});

// Related Products Functions
function populateRelatedProducts(currentProduct) {
    const relatedGrid = document.getElementById('related-products-grid');
    if (!relatedGrid) return;
    
    // Get related products based on category and exclude current product
    let relatedProducts = products
        .filter(p => p.id !== currentProduct.id && p.image) // Only products with images
        .sort((a, b) => {
            // Prioritize same category
            if (a.category === currentProduct.category && b.category !== currentProduct.category) return -1;
            if (b.category === currentProduct.category && a.category !== currentProduct.category) return 1;
            // Then by popularity
            return (b.popularity || 0) - (a.popularity || 0);
        })
        .slice(0, 3); // Show maximum 3 related products
    
    // If we don't have enough same-category products, fill with popular products
    if (relatedProducts.length < 3) {
        const additionalProducts = products
            .filter(p => p.id !== currentProduct.id && p.image && !relatedProducts.includes(p))
            .sort((a, b) => (b.popularity || 0) - (a.popularity || 0))
            .slice(0, 3 - relatedProducts.length);
        
        relatedProducts = [...relatedProducts, ...additionalProducts];
    }
    
    relatedGrid.innerHTML = relatedProducts.map(product => `
        <div class="related-product-card" onclick="showProductDetail(products.find(p => p.id === ${product.id}))">
            ${product.badge ? `<div class="related-product-badge">${product.badge}</div>` : ''}
            
            <div class="related-product-image">
                ${product.image ? 
                    `<img src="${product.image}" alt="${product.name}" />` : 
                    `<div class="placeholder">
                        <i class="fas fa-vial"></i><br>
                        Photo Coming Soon
                    </div>`
                }
            </div>
            
            <div class="related-product-info">
                <h4>${product.name}</h4>
                <div class="related-product-price">$${product.price.min}.00 - $${product.price.max}.00</div>
                <div class="related-product-description">${product.description}</div>
                <button class="related-product-cta" onclick="event.stopPropagation(); showProductDetail(products.find(p => p.id === ${product.id}))">
                    View Details
                </button>
            </div>
        </div>
    `).join('');
}

// Initialize Enhanced Features
document.addEventListener('DOMContentLoaded', function() {
    updateRecentlyViewedDisplay();
    updateCartCount();
    
    // Check if we should show the first-time buyer popup
    checkFirstTimeVisitor();
    
    // Close discount popup when clicking outside of it
    const overlay = document.getElementById('discount-popup-overlay');
    if (overlay) {
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                closeDiscountPopup();
            }
        });
    }
    
    // Add keyboard support for image zoom and discount popup
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Close discount popup if open
            const discountPopup = document.getElementById('discount-popup-overlay');
            if (discountPopup && discountPopup.style.display === 'flex') {
                closeDiscountPopup();
                return;
            }
            

        }
    });
    
    // Enhanced search with loading
    if (searchInput) {
        let searchTimeout;
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                if (this.value.length > 2) {
                    showLoading();
                    setTimeout(() => {
                        // Existing search logic would go here
                        hideLoading();
                    }, 300);
                }
            }, 300);
        });
    }
    
    // Chat functionality
    const chatModal = document.getElementById('chat-modal');
    const chatClose = document.getElementById('chat-close');
    const chatForm = document.getElementById('chat-form');
    
    // Open chat modal
    if (chatButton) {
        chatButton.addEventListener('click', function() {
            chatModal.classList.remove('hidden');
        });
    }
    
    // Close chat modal
    if (chatClose) {
        chatClose.addEventListener('click', function() {
            chatModal.classList.add('hidden');
        });
    }
    
    // Close modal when clicking outside
    if (chatModal) {
        chatModal.addEventListener('click', function(e) {
            if (e.target === chatModal) {
                chatModal.classList.add('hidden');
            }
        });
    }
    
    // Handle chat form submission
    if (chatForm) {
        chatForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Create mailto link for Ionos email
            const subject = encodeURIComponent(`Chat Message from ${name} - Schaw Peptide Labs`);
            const body = encodeURIComponent(
                `New chat message received:\n\n` +
                `Name: ${name}\n` +
                `Email: ${email}\n\n` +
                `Message:\n${message}\n\n` +
                `---\n` +
                `This message was sent via the chat feature on Schaw Peptide Labs website.`
            );
            
            // Use Ionos email address
            const mailtoLink = `mailto:research@schawpeptidelabs.com?subject=${subject}&body=${body}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show success message
            showToast('Email client opened! Please send the email to complete your message.', 'success');
            
            // Reset form and close modal
            this.reset();
            chatModal.classList.add('hidden');
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && chatModal && !chatModal.classList.contains('hidden')) {
            chatModal.classList.add('hidden');
        }
    });
    
    // Initialize chat modal as hidden
    if (chatModal) {
        chatModal.classList.add('hidden');
    }
});