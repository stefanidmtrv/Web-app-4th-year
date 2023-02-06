(function(vegaEmbed) {
    var spec2 = {"config": {"view": {"continuousWidth": 400, "continuousHeight": 300}}, "data": {"name": "data-de66fc6263a7e567e8c294cf53ad0951"}, "mark": {"type": "line", "point": true}, "encoding": {"color": {"field": "ticker", "type": "nominal"}, "opacity": {"condition": {"value": 1, "selection": "selector021"}, "value": 0.1}, "tooltip": [{"field": "dates", "type": "temporal"}, {"field": "yearly_emissions", "type": "quantitative"}, {"field": "ticker", "type": "nominal"}], "x": {"axis": {"labelAngle": -45}, "field": "dates", "title": "Dates", "type": "temporal"}, "y": {"field": "yearly_emissions", "title": "Yearly Emissions (T) ", "type": "quantitative"}}, "height": 300, "selection": {"selector021": {"type": "single", "fields": ["ticker"], "bind": "legend"}, "selector023": {"type": "interval", "bind": "scales", "encodings": ["x", "y"]}}, "width": 600, "$schema": "https://vega.github.io/schema/vega-lite/v4.17.0.json", "datasets": {"data-de66fc6263a7e567e8c294cf53ad0951": [{"dates": "2022-09-15T00:00:00", "yearly_emissions": 0.0, "daily_emissions": null, "ticker": "eth2"}, {"dates": "2022-10-15T00:00:00", "yearly_emissions": 896.12, "daily_emissions": 2455.1261840448, "ticker": "eth2"}, {"dates": "2022-11-14T00:00:00", "yearly_emissions": 917.89, "daily_emissions": 2514.7628478336, "ticker": "eth2"}, {"dates": "2022-12-14T00:00:00", "yearly_emissions": 925.94, "daily_emissions": 2536.8133789824, "ticker": "eth2"}, {"dates": "2023-01-13T00:00:00", "yearly_emissions": 879.84, "daily_emissions": 2410.523973312, "ticker": "eth2"}, {"dates": "2021-08-26T00:00:00", "yearly_emissions": 276.59, "daily_emissions": 757.77048072, "ticker": "ada"}, {"dates": "2021-09-25T00:00:00", "yearly_emissions": 279.33, "daily_emissions": 765.29551032, "ticker": "ada"}, {"dates": "2021-10-25T00:00:00", "yearly_emissions": 282.08, "daily_emissions": 772.82053992, "ticker": "ada"}, {"dates": "2021-11-24T00:00:00", "yearly_emissions": 284.83, "daily_emissions": 780.34556952, "ticker": "ada"}, {"dates": "2021-12-24T00:00:00", "yearly_emissions": 287.66, "daily_emissions": 788.12143344, "ticker": "ada"}, {"dates": "2022-01-23T00:00:00", "yearly_emissions": 287.02, "daily_emissions": 786.3655932, "ticker": "ada"}, {"dates": "2022-02-22T00:00:00", "yearly_emissions": 289.5, "daily_emissions": 793.13811984, "ticker": "ada"}, {"dates": "2022-03-24T00:00:00", "yearly_emissions": 292.97, "daily_emissions": 802.669824, "ticker": "ada"}, {"dates": "2022-04-23T00:00:00", "yearly_emissions": 293.62, "daily_emissions": 804.42566424, "ticker": "ada"}, {"dates": "2022-05-23T00:00:00", "yearly_emissions": 292.43, "daily_emissions": 801.16481808, "ticker": "ada"}, {"dates": "2022-06-22T00:00:00", "yearly_emissions": 291.97, "daily_emissions": 799.91064648, "ticker": "ada"}, {"dates": "2022-07-22T00:00:00", "yearly_emissions": 290.59, "daily_emissions": 796.14813168, "ticker": "ada"}, {"dates": "2022-08-21T00:00:00", "yearly_emissions": 291.88, "daily_emissions": 799.65981216, "ticker": "ada"}, {"dates": "2022-09-20T00:00:00", "yearly_emissions": 292.43, "daily_emissions": 801.16481808, "ticker": "ada"}, {"dates": "2022-10-20T00:00:00", "yearly_emissions": 293.07, "daily_emissions": 802.92065832, "ticker": "ada"}, {"dates": "2022-11-19T00:00:00", "yearly_emissions": 296.27, "daily_emissions": 811.69985952, "ticker": "ada"}, {"dates": "2022-12-19T00:00:00", "yearly_emissions": 294.26, "daily_emissions": 806.18150448, "ticker": "ada"}, {"dates": "2023-01-18T00:00:00", "yearly_emissions": 295.08, "daily_emissions": 808.43901336, "ticker": "ada"}, {"dates": "2021-09-02T00:00:00", "yearly_emissions": 119.52, "daily_emissions": 327.4641405, "ticker": "avax"}, {"dates": "2021-10-02T00:00:00", "yearly_emissions": 185.74, "daily_emissions": 508.87163061, "ticker": "avax"}, {"dates": "2021-11-01T00:00:00", "yearly_emissions": 230.81, "daily_emissions": 632.36709072, "ticker": "avax"}, {"dates": "2021-12-01T00:00:00", "yearly_emissions": 245.11, "daily_emissions": 671.53524984, "ticker": "avax"}, {"dates": "2021-12-31T00:00:00", "yearly_emissions": 244.28, "daily_emissions": 669.26463192, "ticker": "avax"}, {"dates": "2022-01-30T00:00:00", "yearly_emissions": 258.99, "daily_emissions": 709.5681, "ticker": "avax"}, {"dates": "2022-03-01T00:00:00", "yearly_emissions": 261.89, "daily_emissions": 717.51526272, "ticker": "avax"}, {"dates": "2022-03-31T00:00:00", "yearly_emissions": 286.55, "daily_emissions": 785.06614584, "ticker": "avax"}, {"dates": "2022-04-30T00:00:00", "yearly_emissions": 332.96, "daily_emissions": 912.22074936, "ticker": "avax"}, {"dates": "2022-05-30T00:00:00", "yearly_emissions": 303.95, "daily_emissions": 832.74912216, "ticker": "avax"}, {"dates": "2022-06-29T00:00:00", "yearly_emissions": 275.98, "daily_emissions": 756.11576736, "ticker": "avax"}, {"dates": "2022-07-29T00:00:00", "yearly_emissions": 258.79, "daily_emissions": 709.00044552, "ticker": "avax"}, {"dates": "2022-08-28T00:00:00", "yearly_emissions": 276.4, "daily_emissions": 757.25107632, "ticker": "avax"}, {"dates": "2022-09-27T00:00:00", "yearly_emissions": 257.54, "daily_emissions": 705.59451864, "ticker": "avax"}, {"dates": "2022-10-27T00:00:00", "yearly_emissions": 253.4, "daily_emissions": 694.24142904, "ticker": "avax"}, {"dates": "2022-11-26T00:00:00", "yearly_emissions": 257.96, "daily_emissions": 706.7298276, "ticker": "avax"}, {"dates": "2022-12-26T00:00:00", "yearly_emissions": 253.4, "daily_emissions": 694.24142904, "ticker": "avax"}, {"dates": "2021-08-30T00:00:00", "yearly_emissions": 32.24, "daily_emissions": 88.337304, "ticker": "dot"}, {"dates": "2021-09-29T00:00:00", "yearly_emissions": 32.24, "daily_emissions": 88.337304, "ticker": "dot"}, {"dates": "2021-10-29T00:00:00", "yearly_emissions": 32.24, "daily_emissions": 88.337304, "ticker": "dot"}, {"dates": "2021-11-28T00:00:00", "yearly_emissions": 32.24, "daily_emissions": 88.337304, "ticker": "dot"}, {"dates": "2021-12-28T00:00:00", "yearly_emissions": 32.24, "daily_emissions": 88.337304, "ticker": "dot"}, {"dates": "2022-01-27T00:00:00", "yearly_emissions": 32.24, "daily_emissions": 88.337304, "ticker": "dot"}, {"dates": "2022-02-26T00:00:00", "yearly_emissions": 32.24, "daily_emissions": 88.337304, "ticker": "dot"}, {"dates": "2022-03-28T00:00:00", "yearly_emissions": 32.24, "daily_emissions": 88.337304, "ticker": "dot"}, {"dates": "2022-04-27T00:00:00", "yearly_emissions": 32.24, "daily_emissions": 88.337304, "ticker": "dot"}, {"dates": "2022-05-27T00:00:00", "yearly_emissions": 32.24, "daily_emissions": 88.337304, "ticker": "dot"}, {"dates": "2022-06-26T00:00:00", "yearly_emissions": 32.24, "daily_emissions": 88.337304, "ticker": "dot"}, {"dates": "2022-07-26T00:00:00", "yearly_emissions": 32.24, "daily_emissions": 88.337304, "ticker": "dot"}, {"dates": "2022-08-25T00:00:00", "yearly_emissions": 32.24, "daily_emissions": 88.337304, "ticker": "dot"}, {"dates": "2022-09-24T00:00:00", "yearly_emissions": 32.24, "daily_emissions": 88.337304, "ticker": "dot"}, {"dates": "2022-10-24T00:00:00", "yearly_emissions": 32.24, "daily_emissions": 88.337304, "ticker": "dot"}, {"dates": "2022-11-23T00:00:00", "yearly_emissions": 32.24, "daily_emissions": 88.337304, "ticker": "dot"}, {"dates": "2022-12-23T00:00:00", "yearly_emissions": 32.24, "daily_emissions": 88.337304, "ticker": "dot"}, {"dates": "2023-01-22T00:00:00", "yearly_emissions": 32.24, "daily_emissions": 88.337304, "ticker": "dot"}, {"dates": "2021-10-08T00:00:00", "yearly_emissions": 982.49, "daily_emissions": 2691.74109312, "ticker": "sol"}, {"dates": "2021-11-07T00:00:00", "yearly_emissions": 1065.25, "daily_emissions": 2918.49102216, "ticker": "sol"}, {"dates": "2021-12-07T00:00:00", "yearly_emissions": 1147.12, "daily_emissions": 3142.80277992, "ticker": "sol"}, {"dates": "2022-01-06T00:00:00", "yearly_emissions": 1215.65, "daily_emissions": 3330.54196848, "ticker": "sol"}, {"dates": "2022-02-05T00:00:00", "yearly_emissions": 1313.54, "daily_emissions": 3598.74080928, "ticker": "sol"}, {"dates": "2022-03-07T00:00:00", "yearly_emissions": 1377.62, "daily_emissions": 3774.28914144, "ticker": "sol"}, {"dates": "2022-04-06T00:00:00", "yearly_emissions": 1486.19, "daily_emissions": 4071.7460376, "ticker": "sol"}, {"dates": "2022-05-06T00:00:00", "yearly_emissions": 1555.6, "daily_emissions": 4261.92339744, "ticker": "sol"}, {"dates": "2022-06-05T00:00:00", "yearly_emissions": 1577.85, "daily_emissions": 4322.87767944, "ticker": "sol"}, {"dates": "2022-07-05T00:00:00", "yearly_emissions": 1608.11, "daily_emissions": 4405.77550296, "ticker": "sol"}, {"dates": "2022-08-04T00:00:00", "yearly_emissions": 1698.88, "daily_emissions": 4654.46897352, "ticker": "sol"}, {"dates": "2022-09-03T00:00:00", "yearly_emissions": 1729.14, "daily_emissions": 4737.36679704, "ticker": "sol"}, {"dates": "2022-10-03T00:00:00", "yearly_emissions": 1811.01, "daily_emissions": 4961.6785548, "ticker": "sol"}, {"dates": "2022-11-02T00:00:00", "yearly_emissions": 1922.25, "daily_emissions": 5266.4499648, "ticker": "sol"}, {"dates": "2022-12-02T00:00:00", "yearly_emissions": 1666.84, "daily_emissions": 4566.69480744, "ticker": "sol"}, {"dates": "2023-01-01T00:00:00", "yearly_emissions": 2106.47, "daily_emissions": 5771.15141976, "ticker": "sol"}, {"dates": "2021-08-29T00:00:00", "yearly_emissions": 51.97, "daily_emissions": 142.39557, "ticker": "xtz"}, {"dates": "2021-09-28T00:00:00", "yearly_emissions": 52.39, "daily_emissions": 143.53473456, "ticker": "xtz"}, {"dates": "2021-10-28T00:00:00", "yearly_emissions": 52.81, "daily_emissions": 144.67389912, "ticker": "xtz"}, {"dates": "2021-11-27T00:00:00", "yearly_emissions": 53.08, "daily_emissions": 145.43334216, "ticker": "xtz"}, {"dates": "2021-12-27T00:00:00", "yearly_emissions": 53.64, "daily_emissions": 146.95222824, "ticker": "xtz"}, {"dates": "2022-01-26T00:00:00", "yearly_emissions": 56.27, "daily_emissions": 154.16693712, "ticker": "xtz"}, {"dates": "2022-02-25T00:00:00", "yearly_emissions": 57.38, "daily_emissions": 157.20470928, "ticker": "xtz"}, {"dates": "2022-03-27T00:00:00", "yearly_emissions": 56.69, "daily_emissions": 155.30610168, "ticker": "xtz"}, {"dates": "2022-04-26T00:00:00", "yearly_emissions": 57.1, "daily_emissions": 156.44526624, "ticker": "xtz"}, {"dates": "2022-05-26T00:00:00", "yearly_emissions": 56.83, "daily_emissions": 155.6858232, "ticker": "xtz"}, {"dates": "2022-06-25T00:00:00", "yearly_emissions": 55.72, "daily_emissions": 152.64805104, "ticker": "xtz"}, {"dates": "2022-07-25T00:00:00", "yearly_emissions": 56.41, "daily_emissions": 154.54665864, "ticker": "xtz"}, {"dates": "2022-08-24T00:00:00", "yearly_emissions": 56.27, "daily_emissions": 154.16693712, "ticker": "xtz"}, {"dates": "2022-09-23T00:00:00", "yearly_emissions": 56.55, "daily_emissions": 154.92638016, "ticker": "xtz"}, {"dates": "2022-10-23T00:00:00", "yearly_emissions": 57.1, "daily_emissions": 156.44526624, "ticker": "xtz"}, {"dates": "2022-11-22T00:00:00", "yearly_emissions": 56.83, "daily_emissions": 155.6858232, "ticker": "xtz"}, {"dates": "2022-12-22T00:00:00", "yearly_emissions": 56.83, "daily_emissions": 155.6858232, "ticker": "xtz"}, {"dates": "2023-01-21T00:00:00", "yearly_emissions": 56.69, "daily_emissions": 155.30610168, "ticker": "xtz"}, {"dates": "2021-09-13T00:00:00", "yearly_emissions": 249.36, "daily_emissions": 683.16803568, "ticker": "algo"}, {"dates": "2021-10-13T00:00:00", "yearly_emissions": 264.58, "daily_emissions": 724.88408544, "ticker": "algo"}, {"dates": "2021-11-12T00:00:00", "yearly_emissions": 279.61, "daily_emissions": 766.05836832, "ticker": "algo"}, {"dates": "2021-12-12T00:00:00", "yearly_emissions": 294.64, "daily_emissions": 807.2326512, "ticker": "algo"}, {"dates": "2022-01-11T00:00:00", "yearly_emissions": 338.34, "daily_emissions": 926.96313168, "ticker": "algo"}, {"dates": "2022-02-10T00:00:00", "yearly_emissions": 357.92, "daily_emissions": 980.5980528, "ticker": "algo"}, {"dates": "2022-03-12T00:00:00", "yearly_emissions": 394.9, "daily_emissions": 1081.90845936, "ticker": "algo"}, {"dates": "2022-04-11T00:00:00", "yearly_emissions": 432.67, "daily_emissions": 1185.38593344, "ticker": "algo"}, {"dates": "2022-05-11T00:00:00", "yearly_emissions": 354.16, "daily_emissions": 970.30448208, "ticker": "algo"}, {"dates": "2022-06-10T00:00:00", "yearly_emissions": 287.13, "daily_emissions": 786.64550976, "ticker": "algo"}, {"dates": "2022-07-10T00:00:00", "yearly_emissions": 313.03, "daily_emissions": 857.61697104, "ticker": "algo"}, {"dates": "2022-08-09T00:00:00", "yearly_emissions": 274.47, "daily_emissions": 751.97242944, "ticker": "algo"}, {"dates": "2022-09-08T00:00:00", "yearly_emissions": 317.97, "daily_emissions": 871.16114304, "ticker": "algo"}, {"dates": "2022-10-08T00:00:00", "yearly_emissions": 327.47, "daily_emissions": 897.16595328, "ticker": "algo"}, {"dates": "2022-11-07T00:00:00", "yearly_emissions": 337.75, "daily_emissions": 925.33783104, "ticker": "algo"}, {"dates": "2022-12-07T00:00:00", "yearly_emissions": 321.93, "daily_emissions": 881.99648064, "ticker": "algo"}, {"dates": "2023-01-06T00:00:00", "yearly_emissions": 253.9, "daily_emissions": 695.62867392, "ticker": "algo"}, {"dates": "2020-06-12T00:00:00", "yearly_emissions": 47.07, "daily_emissions": 3095.0128730623, "ticker": "matic"}, {"dates": "2020-07-12T00:00:00", "yearly_emissions": 47.07, "daily_emissions": 3095.0130966049, "ticker": "matic"}, {"dates": "2020-08-11T00:00:00", "yearly_emissions": 47.07, "daily_emissions": 3095.0827859939, "ticker": "matic"}, {"dates": "2020-09-10T00:00:00", "yearly_emissions": 47.08, "daily_emissions": 3095.6657290714, "ticker": "matic"}, {"dates": "2020-10-10T00:00:00", "yearly_emissions": 47.09, "daily_emissions": 3096.1283503728, "ticker": "matic"}, {"dates": "2020-11-09T00:00:00", "yearly_emissions": 47.09, "daily_emissions": 3096.2865626106, "ticker": "matic"}, {"dates": "2020-12-09T00:00:00", "yearly_emissions": 47.19, "daily_emissions": 3102.6560162936, "ticker": "matic"}, {"dates": "2021-01-08T00:00:00", "yearly_emissions": 47.11, "daily_emissions": 3097.7013075062, "ticker": "matic"}, {"dates": "2021-02-07T00:00:00", "yearly_emissions": 47.12, "daily_emissions": 3098.6253206251, "ticker": "matic"}, {"dates": "2021-03-09T00:00:00", "yearly_emissions": 47.2, "daily_emissions": 3103.3289352463, "ticker": "matic"}, {"dates": "2021-04-08T00:00:00", "yearly_emissions": 47.27, "daily_emissions": 3108.2368677557, "ticker": "matic"}, {"dates": "2021-05-08T00:00:00", "yearly_emissions": 49.57, "daily_emissions": 3259.2480176923, "ticker": "matic"}, {"dates": "2021-06-07T00:00:00", "yearly_emissions": 52.32, "daily_emissions": 3439.9243254694, "ticker": "matic"}, {"dates": "2021-07-07T00:00:00", "yearly_emissions": 51.4, "daily_emissions": 3379.4871947515, "ticker": "matic"}, {"dates": "2021-08-06T00:00:00", "yearly_emissions": 50.62, "daily_emissions": 3328.2439219149, "ticker": "matic"}, {"dates": "2021-09-05T00:00:00", "yearly_emissions": 51.76, "daily_emissions": 3403.7010999217, "ticker": "matic"}, {"dates": "2021-10-05T00:00:00", "yearly_emissions": 51.22, "daily_emissions": 3367.6352483272, "ticker": "matic"}, {"dates": "2021-11-04T00:00:00", "yearly_emissions": 49.96, "daily_emissions": 3285.2968159755, "ticker": "matic"}, {"dates": "2021-12-04T00:00:00", "yearly_emissions": 50.8, "daily_emissions": 3340.0665283799, "ticker": "matic"}, {"dates": "2022-01-03T00:00:00", "yearly_emissions": 50.94, "daily_emissions": 3349.2652483116, "ticker": "matic"}, {"dates": "2022-02-02T00:00:00", "yearly_emissions": 49.9, "daily_emissions": 3281.3287122202, "ticker": "matic"}, {"dates": "2022-03-04T00:00:00", "yearly_emissions": 49.68, "daily_emissions": 3266.818174282, "ticker": "matic"}, {"dates": "2022-04-03T00:00:00", "yearly_emissions": 49.68, "daily_emissions": 3266.784475243, "ticker": "matic"}, {"dates": "2022-05-03T00:00:00", "yearly_emissions": 49.59, "daily_emissions": 3260.7603389098, "ticker": "matic"}, {"dates": "2022-06-02T00:00:00", "yearly_emissions": 49.35, "daily_emissions": 3244.7152931563, "ticker": "matic"}, {"dates": "2022-07-02T00:00:00", "yearly_emissions": 49.06, "daily_emissions": 3225.8697063715, "ticker": "matic"}, {"dates": "2022-08-01T00:00:00", "yearly_emissions": 49.69, "daily_emissions": 3267.3740687112, "ticker": "matic"}, {"dates": "2022-08-31T00:00:00", "yearly_emissions": 49.45, "daily_emissions": 3251.2933120358, "ticker": "matic"}, {"dates": "2022-09-30T00:00:00", "yearly_emissions": 49.61, "daily_emissions": 3261.8812930127, "ticker": "matic"}, {"dates": "2022-10-30T00:00:00", "yearly_emissions": 49.24, "daily_emissions": 3238.0044341181, "ticker": "matic"}, {"dates": "2022-11-29T00:00:00", "yearly_emissions": 49.58, "daily_emissions": 3260.2804489466, "ticker": "matic"}, {"dates": "2022-12-29T00:00:00", "yearly_emissions": 49.68, "daily_emissions": 3266.909882612, "ticker": "matic"}, {"dates": "2022-07-09T00:00:00", "yearly_emissions": 72.82, "daily_emissions": 4788.0715332531, "ticker": "trx"}, {"dates": "2022-08-08T00:00:00", "yearly_emissions": 73.74, "daily_emissions": 4848.529552549, "ticker": "trx"}, {"dates": "2022-09-08T00:00:00", "yearly_emissions": 73.92, "daily_emissions": 4860.6915161122, "ticker": "trx"}, {"dates": "2022-10-07T00:00:00", "yearly_emissions": 74.26, "daily_emissions": 4883.0269123193, "ticker": "trx"}, {"dates": "2022-11-06T00:00:00", "yearly_emissions": 74.88, "daily_emissions": 4923.8715180869, "ticker": "trx"}, {"dates": "2022-12-06T00:00:00", "yearly_emissions": 77.17, "daily_emissions": 5074.4936010367, "ticker": "trx"}, {"dates": "2023-01-05T00:00:00", "yearly_emissions": 77.06, "daily_emissions": 5067.2125056855, "ticker": "trx"}]}};
    var embedOpt2 = {"actions": false, "mode": "vega-lite"};

    function showError(el2, error){
        el2.innerHTML = ('<div class="error" style="color:red;">'
            + '<p>JavaScript Error: ' + error.message + '</p>'
            + "<p>This usually means there's a typo in your chart specification. "
            + "See the javascript console for the full traceback.</p>"
            + '</div>');
        throw error;
    }
    const el = document.getElementById('vis2');
    vegaEmbed("#vis2", spec2, embedOpt2)
        .catch(error => showError(el2, error));
})(vegaEmbed);