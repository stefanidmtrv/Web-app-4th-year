(function(vegaEmbed) {
    var spec = {"config": {"view": {"continuousWidth": 400, "continuousHeight": 300}}, "data": {"name": "data-68cc3b75ff9bd79b0bc056c69e171213"}, "mark": {"type": "line", "point": true}, "encoding": {"color": {"field": "ticker", "type": "nominal"}, "opacity": {"condition": {"value": 1, "selection": "selector014"}, "value": 0.1}, "tooltip": [{"field": "dates", "type": "temporal"}, {"field": "yearly_emissions", "type": "quantitative"}, {"field": "ticker", "type": "nominal"}], "x": {"axis": {"labelAngle": -45}, "field": "dates", "title": "Dates", "type": "temporal"}, "y": {"field": "yearly_emissions", "title": "Yearly Emissions (T)", "type": "quantitative"}}, "height": 300, "selection": {"selector014": {"type": "single", "fields": ["ticker"], "bind": "legend"}, "selector016": {"type": "interval", "bind": "scales", "encodings": ["x", "y"]}}, "width": 600, "$schema": "https://vega.github.io/schema/vega-lite/v4.17.0.json", "datasets": {"data-68cc3b75ff9bd79b0bc056c69e171213": [{"dates": "2020-06-25T00:00:00", "yearly_emissions": 23405439.0, "daily_emissions": 0.06408059740000001, "ticker": "btc"}, {"dates": "2020-07-25T00:00:00", "yearly_emissions": 20611458.0, "daily_emissions": 0.0564310949, "ticker": "btc"}, {"dates": "2020-08-24T00:00:00", "yearly_emissions": 23570702.0, "daily_emissions": 0.06453306290000001, "ticker": "btc"}, {"dates": "2020-09-23T00:00:00", "yearly_emissions": 22847652.0, "daily_emissions": 0.0625534614, "ticker": "btc"}, {"dates": "2020-10-23T00:00:00", "yearly_emissions": 23500543.0, "daily_emissions": 0.0643409776, "ticker": "btc"}, {"dates": "2020-11-22T00:00:00", "yearly_emissions": 44017805.0, "daily_emissions": 0.1205141819, "ticker": "btc"}, {"dates": "2020-12-22T00:00:00", "yearly_emissions": 46841722.0, "daily_emissions": 0.1282456447, "ticker": "btc"}, {"dates": "2021-01-21T00:00:00", "yearly_emissions": 59420916.0, "daily_emissions": 0.1626855995, "ticker": "btc"}, {"dates": "2021-02-20T00:00:00", "yearly_emissions": 63164530.0, "daily_emissions": 0.1729350571, "ticker": "btc"}, {"dates": "2021-03-22T00:00:00", "yearly_emissions": 69191254.0, "daily_emissions": 0.18943532670000002, "ticker": "btc"}, {"dates": "2021-04-21T00:00:00", "yearly_emissions": 56182252.0, "daily_emissions": 0.1538186214, "ticker": "btc"}, {"dates": "2021-05-21T00:00:00", "yearly_emissions": 58415670.0, "daily_emissions": 0.1599333872, "ticker": "btc"}, {"dates": "2021-06-20T00:00:00", "yearly_emissions": 39551361.0, "daily_emissions": 0.1082857223, "ticker": "btc"}, {"dates": "2021-07-20T00:00:00", "yearly_emissions": 36939262.0, "daily_emissions": 0.1011341868, "ticker": "btc"}, {"dates": "2021-08-19T00:00:00", "yearly_emissions": 48141798.0, "daily_emissions": 0.1318050592, "ticker": "btc"}, {"dates": "2021-09-18T00:00:00", "yearly_emissions": 49966026.0, "daily_emissions": 0.1367995215, "ticker": "btc"}, {"dates": "2021-10-18T00:00:00", "yearly_emissions": 54161288.0, "daily_emissions": 0.1482855224, "ticker": "btc"}, {"dates": "2021-11-17T00:00:00", "yearly_emissions": 63711141.0, "daily_emissions": 0.1744315967, "ticker": "btc"}, {"dates": "2021-12-17T00:00:00", "yearly_emissions": 61269552.0, "daily_emissions": 0.167746889, "ticker": "btc"}, {"dates": "2022-01-16T00:00:00", "yearly_emissions": 70590178.0, "daily_emissions": 0.1932653731, "ticker": "btc"}, {"dates": "2022-02-15T00:00:00", "yearly_emissions": 72306278.0, "daily_emissions": 0.19796379960000002, "ticker": "btc"}, {"dates": "2022-03-17T00:00:00", "yearly_emissions": 67959347.0, "daily_emissions": 0.1860625495, "ticker": "btc"}, {"dates": "2022-04-16T00:00:00", "yearly_emissions": 65795532.0, "daily_emissions": 0.1801383483, "ticker": "btc"}, {"dates": "2022-05-16T00:00:00", "yearly_emissions": 66725891.0, "daily_emissions": 0.1826855323, "ticker": "btc"}, {"dates": "2022-06-15T00:00:00", "yearly_emissions": 60477634.0, "daily_emissions": 0.1655787356, "ticker": "btc"}, {"dates": "2022-07-15T00:00:00", "yearly_emissions": 38841278.0, "daily_emissions": 0.10634162250000001, "ticker": "btc"}, {"dates": "2022-08-14T00:00:00", "yearly_emissions": 42561939.0, "daily_emissions": 0.11652823570000001, "ticker": "btc"}, {"dates": "2022-09-13T00:00:00", "yearly_emissions": 45244034.0, "daily_emissions": 0.1238714122, "ticker": "btc"}, {"dates": "2022-10-13T00:00:00", "yearly_emissions": 52243365.0, "daily_emissions": 0.14303453600000002, "ticker": "btc"}, {"dates": "2022-11-12T00:00:00", "yearly_emissions": 52963504.0, "daily_emissions": 0.1450061688, "ticker": "btc"}, {"dates": "2022-12-12T00:00:00", "yearly_emissions": 48970176.0, "daily_emissions": 0.1340730343, "ticker": "btc"}, {"dates": "2023-01-11T00:00:00", "yearly_emissions": 51645879.0, "daily_emissions": 0.1413987086, "ticker": "btc"}, {"dates": "2020-06-21T00:00:00", "yearly_emissions": 2922468.0, "daily_emissions": 0.008006760600000001, "ticker": "eth"}, {"dates": "2020-07-21T00:00:00", "yearly_emissions": 2666205.0, "daily_emissions": 0.0073046695, "ticker": "eth"}, {"dates": "2020-08-20T00:00:00", "yearly_emissions": 2907879.0, "daily_emissions": 0.0079667912, "ticker": "eth"}, {"dates": "2020-09-19T00:00:00", "yearly_emissions": 3102883.0, "daily_emissions": 0.008501048800000001, "ticker": "eth"}, {"dates": "2020-10-19T00:00:00", "yearly_emissions": 3498317.0, "daily_emissions": 0.009584429, "ticker": "eth"}, {"dates": "2020-11-18T00:00:00", "yearly_emissions": 4987623.0, "daily_emissions": 0.013664720200000001, "ticker": "eth"}, {"dates": "2020-12-18T00:00:00", "yearly_emissions": 5715521.0, "daily_emissions": 0.0156589596, "ticker": "eth"}, {"dates": "2021-01-17T00:00:00", "yearly_emissions": 6407690.0, "daily_emissions": 0.0175553128, "ticker": "eth"}, {"dates": "2021-02-16T00:00:00", "yearly_emissions": 7214982.0, "daily_emissions": 0.0197670733, "ticker": "eth"}, {"dates": "2021-03-18T00:00:00", "yearly_emissions": 7868529.0, "daily_emissions": 0.0215576136, "ticker": "eth"}, {"dates": "2021-04-17T00:00:00", "yearly_emissions": 8008993.0, "daily_emissions": 0.0219424441, "ticker": "eth"}, {"dates": "2021-05-17T00:00:00", "yearly_emissions": 9267921.0, "daily_emissions": 0.0253915621, "ticker": "eth"}, {"dates": "2021-06-16T00:00:00", "yearly_emissions": 8000295.0, "daily_emissions": 0.0219186153, "ticker": "eth"}, {"dates": "2021-07-16T00:00:00", "yearly_emissions": 7743966.0, "daily_emissions": 0.021216345, "ticker": "eth"}, {"dates": "2021-08-15T00:00:00", "yearly_emissions": 9675439.0, "daily_emissions": 0.026508051100000003, "ticker": "eth"}, {"dates": "2021-09-14T00:00:00", "yearly_emissions": 10344719.0, "daily_emissions": 0.0283416947, "ticker": "eth"}, {"dates": "2021-10-14T00:00:00", "yearly_emissions": 11135855.0, "daily_emissions": 0.0305091897, "ticker": "eth"}, {"dates": "2021-11-13T00:00:00", "yearly_emissions": 12659285.0, "daily_emissions": 0.034682971300000004, "ticker": "eth"}, {"dates": "2021-12-13T00:00:00", "yearly_emissions": 13772579.0, "daily_emissions": 0.0377330924, "ticker": "eth"}, {"dates": "2022-01-12T00:00:00", "yearly_emissions": 14674111.0, "daily_emissions": 0.0402030426, "ticker": "eth"}, {"dates": "2022-02-11T00:00:00", "yearly_emissions": 14470037.0, "daily_emissions": 0.0396439352, "ticker": "eth"}, {"dates": "2022-03-13T00:00:00", "yearly_emissions": 14133521.0, "daily_emissions": 0.0387219752, "ticker": "eth"}, {"dates": "2022-04-12T00:00:00", "yearly_emissions": 14413173.0, "daily_emissions": 0.0394881442, "ticker": "eth"}, {"dates": "2022-05-12T00:00:00", "yearly_emissions": 14360146.0, "daily_emissions": 0.039342864000000005, "ticker": "eth"}, {"dates": "2022-06-11T00:00:00", "yearly_emissions": 12734467.0, "daily_emissions": 0.0348889488, "ticker": "eth"}, {"dates": "2022-07-11T00:00:00", "yearly_emissions": 10700676.0, "daily_emissions": 0.029316918600000002, "ticker": "eth"}, {"dates": "2022-08-10T00:00:00", "yearly_emissions": 10822782.0, "daily_emissions": 0.0296514573, "ticker": "eth"}, {"dates": "2022-09-09T00:00:00", "yearly_emissions": 10666919.0, "daily_emissions": 0.0292244342, "ticker": "eth"}, {"dates": "2020-07-01T00:00:00", "yearly_emissions": 212790.0, "daily_emissions": 0.0005829847000000001, "ticker": "bch"}, {"dates": "2020-07-31T00:00:00", "yearly_emissions": 203812.0, "daily_emissions": 0.0005583863, "ticker": "bch"}, {"dates": "2020-08-30T00:00:00", "yearly_emissions": 204179.0, "daily_emissions": 0.0005593924000000001, "ticker": "bch"}, {"dates": "2020-09-29T00:00:00", "yearly_emissions": 182142.0, "daily_emissions": 0.0004990185, "ticker": "bch"}, {"dates": "2020-10-29T00:00:00", "yearly_emissions": 176478.0, "daily_emissions": 0.0004834988, "ticker": "bch"}, {"dates": "2020-11-28T00:00:00", "yearly_emissions": 175456.0, "daily_emissions": 0.00048069920000000003, "ticker": "bch"}, {"dates": "2020-12-28T00:00:00", "yearly_emissions": 161519.0, "daily_emissions": 0.0004425178, "ticker": "bch"}, {"dates": "2021-01-27T00:00:00", "yearly_emissions": 185160.0, "daily_emissions": 0.0005072876, "ticker": "bch"}, {"dates": "2021-02-26T00:00:00", "yearly_emissions": 147415.0, "daily_emissions": 0.0004038758, "ticker": "bch"}, {"dates": "2021-03-28T00:00:00", "yearly_emissions": 137898.0, "daily_emissions": 0.0003778015, "ticker": "bch"}, {"dates": "2021-04-27T00:00:00", "yearly_emissions": 220728.0, "daily_emissions": 0.0006047322, "ticker": "bch"}, {"dates": "2021-05-27T00:00:00", "yearly_emissions": 283612.0, "daily_emissions": 0.0007770185, "ticker": "bch"}, {"dates": "2021-06-26T00:00:00", "yearly_emissions": 158639.0, "daily_emissions": 0.0004346249, "ticker": "bch"}, {"dates": "2021-07-26T00:00:00", "yearly_emissions": 124191.0, "daily_emissions": 0.0003402492, "ticker": "bch"}, {"dates": "2021-08-25T00:00:00", "yearly_emissions": 160319.0, "daily_emissions": 0.0004392301, "ticker": "bch"}, {"dates": "2021-09-24T00:00:00", "yearly_emissions": 154115.0, "daily_emissions": 0.0004222315, "ticker": "bch"}, {"dates": "2021-10-24T00:00:00", "yearly_emissions": 141089.0, "daily_emissions": 0.0003865437, "ticker": "bch"}, {"dates": "2021-11-23T00:00:00", "yearly_emissions": 156448.0, "daily_emissions": 0.0004286223, "ticker": "bch"}, {"dates": "2021-12-23T00:00:00", "yearly_emissions": 155748.0, "daily_emissions": 0.00042670420000000004, "ticker": "bch"}, {"dates": "2022-01-22T00:00:00", "yearly_emissions": 159373.0, "daily_emissions": 0.00043663750000000004, "ticker": "bch"}, {"dates": "2022-02-21T00:00:00", "yearly_emissions": 156632.0, "daily_emissions": 0.0004291267, "ticker": "bch"}, {"dates": "2022-03-23T00:00:00", "yearly_emissions": 164668.0, "daily_emissions": 0.00045114250000000003, "ticker": "bch"}, {"dates": "2022-04-22T00:00:00", "yearly_emissions": 159373.0, "daily_emissions": 0.00043663800000000004, "ticker": "bch"}, {"dates": "2022-05-22T00:00:00", "yearly_emissions": 141943.0, "daily_emissions": 0.00038888270000000003, "ticker": "bch"}, {"dates": "2022-06-21T00:00:00", "yearly_emissions": 114533.0, "daily_emissions": 0.000313788, "ticker": "bch"}, {"dates": "2022-07-21T00:00:00", "yearly_emissions": 97483.0, "daily_emissions": 0.0002670748, "ticker": "bch"}, {"dates": "2022-08-20T00:00:00", "yearly_emissions": 99858.0, "daily_emissions": 0.00027358300000000004, "ticker": "bch"}, {"dates": "2022-09-19T00:00:00", "yearly_emissions": 118755.0, "daily_emissions": 0.00032535400000000003, "ticker": "bch"}, {"dates": "2022-10-19T00:00:00", "yearly_emissions": 127377.0, "daily_emissions": 0.00034897700000000004, "ticker": "bch"}, {"dates": "2022-11-18T00:00:00", "yearly_emissions": 153417.0, "daily_emissions": 0.0004203184, "ticker": "bch"}, {"dates": "2022-12-18T00:00:00", "yearly_emissions": 147730.0, "daily_emissions": 0.0004047392, "ticker": "bch"}, {"dates": "2023-01-17T00:00:00", "yearly_emissions": 156037.0, "daily_emissions": 0.0004274982, "ticker": "bch"}, {"dates": "2020-06-03T00:00:00", "yearly_emissions": 162868.0, "daily_emissions": 0.0004462129, "ticker": "bsv"}, {"dates": "2020-07-03T00:00:00", "yearly_emissions": 146858.0, "daily_emissions": 0.00040234820000000003, "ticker": "bsv"}, {"dates": "2020-08-02T00:00:00", "yearly_emissions": 161623.0, "daily_emissions": 0.0004428014, "ticker": "bsv"}, {"dates": "2020-09-01T00:00:00", "yearly_emissions": 131181.0, "daily_emissions": 0.0003593986, "ticker": "bsv"}, {"dates": "2020-10-01T00:00:00", "yearly_emissions": 152988.0, "daily_emissions": 0.0004191439, "ticker": "bsv"}, {"dates": "2020-10-31T00:00:00", "yearly_emissions": 111715.0, "daily_emissions": 0.00030606810000000003, "ticker": "bsv"}, {"dates": "2020-11-30T00:00:00", "yearly_emissions": 109680.0, "daily_emissions": 0.0003004924, "ticker": "bsv"}, {"dates": "2020-12-30T00:00:00", "yearly_emissions": 86189.0, "daily_emissions": 0.0002361327, "ticker": "bsv"}, {"dates": "2021-01-29T00:00:00", "yearly_emissions": 86189.0, "daily_emissions": 0.0002361331, "ticker": "bsv"}, {"dates": "2021-02-28T00:00:00", "yearly_emissions": 60563.0, "daily_emissions": 0.00016592590000000002, "ticker": "bsv"}, {"dates": "2021-03-30T00:00:00", "yearly_emissions": 58236.0, "daily_emissions": 0.0001595487, "ticker": "bsv"}, {"dates": "2021-04-29T00:00:00", "yearly_emissions": 73786.0, "daily_emissions": 0.0002021523, "ticker": "bsv"}, {"dates": "2021-05-29T00:00:00", "yearly_emissions": 74557.0, "daily_emissions": 0.0002042644, "ticker": "bsv"}, {"dates": "2021-06-28T00:00:00", "yearly_emissions": 47695.0, "daily_emissions": 0.0001306697, "ticker": "bsv"}, {"dates": "2021-07-28T00:00:00", "yearly_emissions": 37875.0, "daily_emissions": 0.00010376600000000001, "ticker": "bsv"}, {"dates": "2021-08-27T00:00:00", "yearly_emissions": 44068.0, "daily_emissions": 0.00012073400000000001, "ticker": "bsv"}, {"dates": "2021-09-26T00:00:00", "yearly_emissions": 44349.0, "daily_emissions": 0.0001215034, "ticker": "bsv"}, {"dates": "2021-10-26T00:00:00", "yearly_emissions": 41920.0, "daily_emissions": 0.00011484740000000001, "ticker": "bsv"}, {"dates": "2021-11-25T00:00:00", "yearly_emissions": 44778.0, "daily_emissions": 0.0001226788, "ticker": "bsv"}, {"dates": "2021-12-25T00:00:00", "yearly_emissions": 45942.0, "daily_emissions": 0.0001258676, "ticker": "bsv"}, {"dates": "2022-01-24T00:00:00", "yearly_emissions": 50030.0, "daily_emissions": 0.0001370683, "ticker": "bsv"}, {"dates": "2022-02-23T00:00:00", "yearly_emissions": 43692.0, "daily_emissions": 0.0001197038, "ticker": "bsv"}, {"dates": "2022-03-25T00:00:00", "yearly_emissions": 41927.0, "daily_emissions": 0.0001148659, "ticker": "bsv"}, {"dates": "2022-04-24T00:00:00", "yearly_emissions": 41194.0, "daily_emissions": 0.0001128597, "ticker": "bsv"}, {"dates": "2022-05-24T00:00:00", "yearly_emissions": 39979.0, "daily_emissions": 0.000109531, "ticker": "bsv"}, {"dates": "2022-06-23T00:00:00", "yearly_emissions": 57426.0, "daily_emissions": 0.00015733040000000001, "ticker": "bsv"}, {"dates": "2022-07-23T00:00:00", "yearly_emissions": 44650.0, "daily_emissions": 0.0001223262, "ticker": "bsv"}, {"dates": "2022-08-22T00:00:00", "yearly_emissions": 45332.0, "daily_emissions": 0.0001241967, "ticker": "bsv"}, {"dates": "2022-09-21T00:00:00", "yearly_emissions": 48283.0, "daily_emissions": 0.0001322807, "ticker": "bsv"}, {"dates": "2022-10-21T00:00:00", "yearly_emissions": 54946.0, "daily_emissions": 0.00015053630000000002, "ticker": "bsv"}, {"dates": "2022-11-18T00:00:00", "yearly_emissions": 58300.0, "daily_emissions": 0.00015972530000000001, "ticker": "bsv"}, {"dates": "2022-12-05T00:00:00", "yearly_emissions": 65696.0, "daily_emissions": 0.00017998880000000001, "ticker": "bsv"}, {"dates": "2022-12-21T00:00:00", "yearly_emissions": 65542.0, "daily_emissions": 0.0001795647, "ticker": "bsv"}, {"dates": "2023-01-08T00:00:00", "yearly_emissions": 62893.0, "daily_emissions": 0.0001723073, "ticker": "bsv"}, {"dates": "2020-06-22T00:00:00", "yearly_emissions": 54235.0, "daily_emissions": 0.00014858810000000001, "ticker": "dash"}, {"dates": "2020-07-22T00:00:00", "yearly_emissions": 52943.0, "daily_emissions": 0.0001450474, "ticker": "dash"}, {"dates": "2020-08-21T00:00:00", "yearly_emissions": 50023.0, "daily_emissions": 0.0001370493, "ticker": "dash"}, {"dates": "2020-09-20T00:00:00", "yearly_emissions": 45514.0, "daily_emissions": 0.00012469450000000002, "ticker": "dash"}, {"dates": "2020-10-20T00:00:00", "yearly_emissions": 66036.0, "daily_emissions": 0.00018091800000000002, "ticker": "dash"}, {"dates": "2020-11-19T00:00:00", "yearly_emissions": 63720.0, "daily_emissions": 0.00017457330000000002, "ticker": "dash"}, {"dates": "2020-12-19T00:00:00", "yearly_emissions": 66478.0, "daily_emissions": 0.0001821299, "ticker": "dash"}, {"dates": "2021-01-18T00:00:00", "yearly_emissions": 53453.0, "daily_emissions": 0.000146445, "ticker": "dash"}, {"dates": "2021-02-17T00:00:00", "yearly_emissions": 68401.0, "daily_emissions": 0.00018739980000000001, "ticker": "dash"}, {"dates": "2021-03-19T00:00:00", "yearly_emissions": 59858.0, "daily_emissions": 0.0001639926, "ticker": "dash"}, {"dates": "2021-04-18T00:00:00", "yearly_emissions": 65928.0, "daily_emissions": 0.00018062230000000001, "ticker": "dash"}, {"dates": "2021-05-18T00:00:00", "yearly_emissions": 61167.0, "daily_emissions": 0.0001675785, "ticker": "dash"}, {"dates": "2021-06-17T00:00:00", "yearly_emissions": 54620.0, "daily_emissions": 0.0001496431, "ticker": "dash"}, {"dates": "2021-07-17T00:00:00", "yearly_emissions": 49492.0, "daily_emissions": 0.0001355924, "ticker": "dash"}, {"dates": "2021-08-16T00:00:00", "yearly_emissions": 50172.0, "daily_emissions": 0.0001374549, "ticker": "dash"}, {"dates": "2021-09-15T00:00:00", "yearly_emissions": 46809.0, "daily_emissions": 0.0001282428, "ticker": "dash"}, {"dates": "2021-10-15T00:00:00", "yearly_emissions": 38010.0, "daily_emissions": 0.00010413430000000001, "ticker": "dash"}, {"dates": "2021-11-14T00:00:00", "yearly_emissions": 28725.0, "daily_emissions": 7.86976e-05, "ticker": "dash"}, {"dates": "2021-12-14T00:00:00", "yearly_emissions": 46313.0, "daily_emissions": 0.00012688400000000001, "ticker": "dash"}, {"dates": "2022-01-13T00:00:00", "yearly_emissions": 54881.0, "daily_emissions": 0.0001503575, "ticker": "dash"}, {"dates": "2022-02-12T00:00:00", "yearly_emissions": 62534.0, "daily_emissions": 0.00017132520000000002, "ticker": "dash"}, {"dates": "2022-03-14T00:00:00", "yearly_emissions": 47652.0, "daily_emissions": 0.0001305517, "ticker": "dash"}, {"dates": "2022-04-13T00:00:00", "yearly_emissions": 43986.0, "daily_emissions": 0.0001205078, "ticker": "dash"}, {"dates": "2022-05-13T00:00:00", "yearly_emissions": 42336.0, "daily_emissions": 0.000115988, "ticker": "dash"}, {"dates": "2022-06-12T00:00:00", "yearly_emissions": 34766.0, "daily_emissions": 9.524840000000001e-05, "ticker": "dash"}, {"dates": "2022-07-12T00:00:00", "yearly_emissions": 23706.0, "daily_emissions": 6.494710000000001e-05, "ticker": "dash"}, {"dates": "2022-08-11T00:00:00", "yearly_emissions": 25763.0, "daily_emissions": 7.058100000000001e-05, "ticker": "dash"}, {"dates": "2022-09-10T00:00:00", "yearly_emissions": 22898.0, "daily_emissions": 6.27334e-05, "ticker": "dash"}, {"dates": "2022-10-10T00:00:00", "yearly_emissions": 24946.0, "daily_emissions": 6.83449e-05, "ticker": "dash"}, {"dates": "2022-11-09T00:00:00", "yearly_emissions": 30874.0, "daily_emissions": 8.45838e-05, "ticker": "dash"}, {"dates": "2022-12-09T00:00:00", "yearly_emissions": 26008.0, "daily_emissions": 7.1254e-05, "ticker": "dash"}, {"dates": "2023-01-08T00:00:00", "yearly_emissions": 31742.0, "daily_emissions": 8.69622e-05, "ticker": "dash"}, {"dates": "2020-06-24T00:00:00", "yearly_emissions": 64638.0, "daily_emissions": 0.0001770901, "ticker": "zec"}, {"dates": "2020-07-24T00:00:00", "yearly_emissions": 59992.0, "daily_emissions": 0.00016436100000000002, "ticker": "zec"}, {"dates": "2020-08-23T00:00:00", "yearly_emissions": 62435.0, "daily_emissions": 0.0001710546, "ticker": "zec"}, {"dates": "2020-09-22T00:00:00", "yearly_emissions": 61917.0, "daily_emissions": 0.0001696329, "ticker": "zec"}, {"dates": "2020-10-22T00:00:00", "yearly_emissions": 67947.0, "daily_emissions": 0.0001861537, "ticker": "zec"}, {"dates": "2020-11-21T00:00:00", "yearly_emissions": 89847.0, "daily_emissions": 0.0002461546, "ticker": "zec"}, {"dates": "2020-12-21T00:00:00", "yearly_emissions": 112175.0, "daily_emissions": 0.00030732860000000004, "ticker": "zec"}, {"dates": "2021-01-20T00:00:00", "yearly_emissions": 110786.0, "daily_emissions": 0.0003035207, "ticker": "zec"}, {"dates": "2021-02-19T00:00:00", "yearly_emissions": 114630.0, "daily_emissions": 0.0003140531, "ticker": "zec"}, {"dates": "2021-03-21T00:00:00", "yearly_emissions": 113664.0, "daily_emissions": 0.0003114076, "ticker": "zec"}, {"dates": "2021-04-20T00:00:00", "yearly_emissions": 107811.0, "daily_emissions": 0.00029537140000000003, "ticker": "zec"}, {"dates": "2021-05-20T00:00:00", "yearly_emissions": 97866.0, "daily_emissions": 0.0002681243, "ticker": "zec"}, {"dates": "2021-06-19T00:00:00", "yearly_emissions": 73079.0, "daily_emissions": 0.0002002153, "ticker": "zec"}, {"dates": "2021-07-19T00:00:00", "yearly_emissions": 69267.0, "daily_emissions": 0.00018977110000000002, "ticker": "zec"}, {"dates": "2021-08-18T00:00:00", "yearly_emissions": 69498.0, "daily_emissions": 0.0001904036, "ticker": "zec"}, {"dates": "2021-09-17T00:00:00", "yearly_emissions": 70800.0, "daily_emissions": 0.0001939723, "ticker": "zec"}, {"dates": "2021-10-17T00:00:00", "yearly_emissions": 80549.0, "daily_emissions": 0.00022067970000000001, "ticker": "zec"}, {"dates": "2021-11-16T00:00:00", "yearly_emissions": 93909.0, "daily_emissions": 0.0002572838, "ticker": "zec"}, {"dates": "2021-12-16T00:00:00", "yearly_emissions": 102913.0, "daily_emissions": 0.00028195250000000004, "ticker": "zec"}, {"dates": "2022-01-15T00:00:00", "yearly_emissions": 108217.0, "daily_emissions": 0.00029648420000000003, "ticker": "zec"}, {"dates": "2022-02-14T00:00:00", "yearly_emissions": 115160.0, "daily_emissions": 0.0003155052, "ticker": "zec"}, {"dates": "2022-03-16T00:00:00", "yearly_emissions": 139527.0, "daily_emissions": 0.0003822639, "ticker": "zec"}, {"dates": "2022-04-15T00:00:00", "yearly_emissions": 149503.0, "daily_emissions": 0.0004095966, "ticker": "zec"}, {"dates": "2022-05-15T00:00:00", "yearly_emissions": 153649.0, "daily_emissions": 0.0004209554, "ticker": "zec"}, {"dates": "2022-06-14T00:00:00", "yearly_emissions": 138289.0, "daily_emissions": 0.0003788727, "ticker": "zec"}, {"dates": "2022-07-14T00:00:00", "yearly_emissions": 103047.0, "daily_emissions": 0.0002823189, "ticker": "zec"}, {"dates": "2022-08-13T00:00:00", "yearly_emissions": 112725.0, "daily_emissions": 0.0003088347, "ticker": "zec"}, {"dates": "2022-09-12T00:00:00", "yearly_emissions": 124642.0, "daily_emissions": 0.000341484, "ticker": "zec"}, {"dates": "2022-10-12T00:00:00", "yearly_emissions": 131918.0, "daily_emissions": 0.0003614165, "ticker": "zec"}, {"dates": "2022-11-11T00:00:00", "yearly_emissions": 140245.0, "daily_emissions": 0.00038423170000000004, "ticker": "zec"}, {"dates": "2022-12-11T00:00:00", "yearly_emissions": 148400.0, "daily_emissions": 0.0004065745, "ticker": "zec"}, {"dates": "2023-01-10T00:00:00", "yearly_emissions": 154066.0, "daily_emissions": 0.0004220978, "ticker": "zec"}, {"dates": "2020-06-11T00:00:00", "yearly_emissions": 292861.0, "daily_emissions": 0.0008023562, "ticker": "ltc"}, {"dates": "2020-07-11T00:00:00", "yearly_emissions": 265817.0, "daily_emissions": 0.0007282651, "ticker": "ltc"}, {"dates": "2020-08-10T00:00:00", "yearly_emissions": 287298.0, "daily_emissions": 0.0007871155000000001, "ticker": "ltc"}, {"dates": "2020-09-09T00:00:00", "yearly_emissions": 281378.0, "daily_emissions": 0.0007708968, "ticker": "ltc"}, {"dates": "2020-10-09T00:00:00", "yearly_emissions": 294692.0, "daily_emissions": 0.0008073727, "ticker": "ltc"}, {"dates": "2020-11-08T00:00:00", "yearly_emissions": 273085.0, "daily_emissions": 0.000748176, "ticker": "ltc"}, {"dates": "2020-12-08T00:00:00", "yearly_emissions": 364827.0, "daily_emissions": 0.0009995243, "ticker": "ltc"}, {"dates": "2021-01-07T00:00:00", "yearly_emissions": 427235.0, "daily_emissions": 0.0011705059, "ticker": "ltc"}, {"dates": "2021-02-06T00:00:00", "yearly_emissions": 342477.0, "daily_emissions": 0.0009382921, "ticker": "ltc"}, {"dates": "2021-03-08T00:00:00", "yearly_emissions": 335214.0, "daily_emissions": 0.0009183930000000001, "ticker": "ltc"}, {"dates": "2021-04-07T00:00:00", "yearly_emissions": 317490.0, "daily_emissions": 0.0008698347, "ticker": "ltc"}, {"dates": "2021-05-07T00:00:00", "yearly_emissions": 152463.0, "daily_emissions": 0.00041770420000000004, "ticker": "ltc"}, {"dates": "2021-06-06T00:00:00", "yearly_emissions": 104350.0, "daily_emissions": 0.00028588910000000003, "ticker": "ltc"}, {"dates": "2021-07-06T00:00:00", "yearly_emissions": 88111.0, "daily_emissions": 0.0002413991, "ticker": "ltc"}, {"dates": "2021-08-05T00:00:00", "yearly_emissions": 122044.0, "daily_emissions": 0.00033436450000000003, "ticker": "ltc"}, {"dates": "2021-09-04T00:00:00", "yearly_emissions": 128654.0, "daily_emissions": 0.0003524765, "ticker": "ltc"}, {"dates": "2021-10-04T00:00:00", "yearly_emissions": 147092.0, "daily_emissions": 0.0004029912, "ticker": "ltc"}, {"dates": "2021-11-03T00:00:00", "yearly_emissions": 150256.0, "daily_emissions": 0.0004116589, "ticker": "ltc"}, {"dates": "2021-12-03T00:00:00", "yearly_emissions": 176446.0, "daily_emissions": 0.0004834121, "ticker": "ltc"}, {"dates": "2022-01-02T00:00:00", "yearly_emissions": 194469.0, "daily_emissions": 0.0005327915, "ticker": "ltc"}, {"dates": "2022-02-01T00:00:00", "yearly_emissions": 193984.0, "daily_emissions": 0.0005314614, "ticker": "ltc"}, {"dates": "2022-03-03T00:00:00", "yearly_emissions": 208126.0, "daily_emissions": 0.0005702082000000001, "ticker": "ltc"}, {"dates": "2022-04-02T00:00:00", "yearly_emissions": 250040.0, "daily_emissions": 0.0006850386, "ticker": "ltc"}, {"dates": "2022-05-02T00:00:00", "yearly_emissions": 230760.0, "daily_emissions": 0.0006322168000000001, "ticker": "ltc"}, {"dates": "2022-06-01T00:00:00", "yearly_emissions": 209952.0, "daily_emissions": 0.0005752087, "ticker": "ltc"}, {"dates": "2022-07-01T00:00:00", "yearly_emissions": 172086.0, "daily_emissions": 0.0004714677, "ticker": "ltc"}, {"dates": "2022-07-31T00:00:00", "yearly_emissions": 197330.0, "daily_emissions": 0.0005406288, "ticker": "ltc"}, {"dates": "2022-08-30T00:00:00", "yearly_emissions": 205302.0, "daily_emissions": 0.0005624689, "ticker": "ltc"}, {"dates": "2022-09-29T00:00:00", "yearly_emissions": 212678.0, "daily_emissions": 0.0005826793, "ticker": "ltc"}, {"dates": "2022-10-29T00:00:00", "yearly_emissions": 234254.0, "daily_emissions": 0.0006417913000000001, "ticker": "ltc"}, {"dates": "2022-11-28T00:00:00", "yearly_emissions": 290583.0, "daily_emissions": 0.0007961166, "ticker": "ltc"}, {"dates": "2022-12-28T00:00:00", "yearly_emissions": 322011.0, "daily_emissions": 0.0008822212, "ticker": "ltc"}, {"dates": "2020-06-07T00:00:00", "yearly_emissions": 27862.0, "daily_emissions": 7.63334e-05, "ticker": "doge"}, {"dates": "2020-07-07T00:00:00", "yearly_emissions": 31006.0, "daily_emissions": 8.49455e-05, "ticker": "doge"}, {"dates": "2020-08-06T00:00:00", "yearly_emissions": 26805.0, "daily_emissions": 7.34357e-05, "ticker": "doge"}, {"dates": "2020-09-05T00:00:00", "yearly_emissions": 29628.0, "daily_emissions": 8.11718e-05, "ticker": "doge"}, {"dates": "2020-10-05T00:00:00", "yearly_emissions": 34479.0, "daily_emissions": 9.44625e-05, "ticker": "doge"}, {"dates": "2020-11-04T00:00:00", "yearly_emissions": 24795.0, "daily_emissions": 6.7929e-05, "ticker": "doge"}, {"dates": "2020-12-04T00:00:00", "yearly_emissions": 27527.0, "daily_emissions": 7.54141e-05, "ticker": "doge"}, {"dates": "2021-01-03T00:00:00", "yearly_emissions": 32156.0, "daily_emissions": 8.80981e-05, "ticker": "doge"}, {"dates": "2021-02-02T00:00:00", "yearly_emissions": 114271.0, "daily_emissions": 0.0003130685, "ticker": "doge"}, {"dates": "2021-03-04T00:00:00", "yearly_emissions": 191605.0, "daily_emissions": 0.0005249441, "ticker": "doge"}, {"dates": "2021-04-03T00:00:00", "yearly_emissions": 165423.0, "daily_emissions": 0.0004532116, "ticker": "doge"}, {"dates": "2021-05-03T00:00:00", "yearly_emissions": 379454.0, "daily_emissions": 0.001039599, "ticker": "doge"}, {"dates": "2021-06-02T00:00:00", "yearly_emissions": 393501.0, "daily_emissions": 0.0010780847, "ticker": "doge"}, {"dates": "2021-07-02T00:00:00", "yearly_emissions": 272492.0, "daily_emissions": 0.0007465508000000001, "ticker": "doge"}, {"dates": "2021-08-01T00:00:00", "yearly_emissions": 442292.0, "daily_emissions": 0.0012117589000000002, "ticker": "doge"}, {"dates": "2021-08-31T00:00:00", "yearly_emissions": 393231.0, "daily_emissions": 0.0010773425, "ticker": "doge"}, {"dates": "2021-09-30T00:00:00", "yearly_emissions": 391033.0, "daily_emissions": 0.0010713231000000001, "ticker": "doge"}, {"dates": "2021-10-30T00:00:00", "yearly_emissions": 406256.0, "daily_emissions": 0.0011130286, "ticker": "doge"}, {"dates": "2021-11-29T00:00:00", "yearly_emissions": 383271.0, "daily_emissions": 0.001050057, "ticker": "doge"}, {"dates": "2021-12-29T00:00:00", "yearly_emissions": 484423.0, "daily_emissions": 0.001327185, "ticker": "doge"}, {"dates": "2022-01-28T00:00:00", "yearly_emissions": 460285.0, "daily_emissions": 0.0012610534, "ticker": "doge"}, {"dates": "2022-02-27T00:00:00", "yearly_emissions": 480848.0, "daily_emissions": 0.0013173909, "ticker": "doge"}, {"dates": "2022-03-29T00:00:00", "yearly_emissions": 484114.0, "daily_emissions": 0.0013263395000000001, "ticker": "doge"}, {"dates": "2022-04-28T00:00:00", "yearly_emissions": 502541.0, "daily_emissions": 0.0013768230000000001, "ticker": "doge"}, {"dates": "2022-05-28T00:00:00", "yearly_emissions": 573367.0, "daily_emissions": 0.0015708673, "ticker": "doge"}, {"dates": "2022-06-27T00:00:00", "yearly_emissions": 496593.0, "daily_emissions": 0.0013605269, "ticker": "doge"}, {"dates": "2022-07-27T00:00:00", "yearly_emissions": 490192.0, "daily_emissions": 0.0013429906, "ticker": "doge"}, {"dates": "2022-08-26T00:00:00", "yearly_emissions": 497580.0, "daily_emissions": 0.0013632311000000002, "ticker": "doge"}, {"dates": "2022-09-25T00:00:00", "yearly_emissions": 439170.0, "daily_emissions": 0.0012032037000000002, "ticker": "doge"}, {"dates": "2022-10-25T00:00:00", "yearly_emissions": 528902.0, "daily_emissions": 0.001449044, "ticker": "doge"}, {"dates": "2022-11-24T00:00:00", "yearly_emissions": 641289.0, "daily_emissions": 0.0017569546, "ticker": "doge"}, {"dates": "2022-12-24T00:00:00", "yearly_emissions": 634361.0, "daily_emissions": 0.0017379750000000001, "ticker": "doge"}]}};
    var embedOpt = {"actions": false, "mode": "vega-lite"};

    function showError(el, error){
        el.innerHTML = ('<div class="error" style="color:red;">'
            + '<p>JavaScript Error: ' + error.message + '</p>'
            + "<p>This usually means there's a typo in your chart specification. "
            + "See the javascript console for the full traceback.</p>"
            + '</div>');
        throw error;
    }
    const el = document.getElementById('vis');
    vegaEmbed("#vis", spec, embedOpt)
        .catch(error => showError(el, error));
})(vegaEmbed);