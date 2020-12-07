export function createPose () {
  const bones = [
    {
      // 中心
      name: 'センター',
      translation: [-1.994186, -0.241098, -0.050083],
      quaternion: [0.008508, -0.417201, 0.00348, 0.908765]
    },
    {
      name: '上半身',
      translation: [0, 0, 0],
      quaternion: [0, 0.01, 0, 0.99995]
    },
    {
      name: '首',
      translation: [0, 0, 0],
      quaternion: [0.059671, 0.020844, -0.137914, 0.988424]
    },
    {
      name: '頭',
      translation: [0, 0, 0],
      quaternion: [-0.10569, 0.195021, -0.117377, 0.967996]
    },
    // {
    //   name: '左目',
    //   translation: [
    //     0,
    //     0,
    //     0
    //   ],
    //   quaternion: [
    //     0,
    //     0,
    //     0,
    //     1
    //   ]
    // },
    // {
    //   name: '右目',
    //   translation: [
    //     0,
    //     0,
    //     0
    //   ],
    //   quaternion: [
    //     0,
    //     0,
    //     0,
    //     1
    //   ]
    // },
    {
      name: 'ﾈｸﾀｲ１',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        -0.128932,
        -0.14953,
        0.118547,
        0.973121
      ]
    },
    {
      name: 'ﾈｸﾀｲ２',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        0.101819,
        0.123631,
        -0.100062,
        0.982006
      ]
    },
    {
      name: 'ﾈｸﾀｲ３',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        0.014637,
        0.086429,
        -0.016842,
        0.996008
      ]
    },
    // {
    //   name: '下半身',
    //   translation: [
    //     0,
    //     0,
    //     0
    //   ],
    //   quaternion: [
    //     0,
    //     0,
    //     -0.119712,
    //     0.992808
    //   ]
    // },
    // {
    //   name: '腰飾り',
    //   translation: [
    //     0,
    //     0,
    //     0
    //   ],
    //   quaternion: [
    //     -0.000001,
    //     0,
    //     -0.000004,
    //     1
    //   ]
    // },
    {
      name: '左髪１',
      translation: [
        -0.411193,
        -0.085255,
        0.02073
      ],
      quaternion: [
        0.141385,
        0.139213,
        -0.035362,
        0.97948
      ]
    },
    {
      name: '左髪２',
      translation: [
        -0.03593,
        -0.056137,
        0.048719
      ],
      quaternion: [
        0.019856,
        -0.003108,
        0.008549,
        0.999762
      ]
    },
    {
      name: '左髪３',
      translation: [
        0.030077,
        -0.004477,
        0.060761
      ],
      quaternion: [
        -0.071185,
        -0.04863,
        0.057587,
        0.994611
      ]
    },
    {
      name: '左髪４',
      translation: [
        0.030964,
        -0.015428,
        0.035141
      ],
      quaternion: [
        -0.103543,
        0.036752,
        0.102269,
        0.98867
      ]
    },
    {
      name: '左髪５',
      translation: [
        0.0007,
        0.000184,
        0.000108
      ],
      quaternion: [
        -0.0487,
        -0.004063,
        0.093851,
        0.994386
      ]
    },
    {
      name: '左髪６',
      translation: [
        0.001655,
        -0.011049,
        0.000326
      ],
      quaternion: [
        0.044553,
        -0.002348,
        0.044513,
        0.998012
      ]
    },
    {
      name: '左肩',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        0,
        0,
        0.144492,
        0.989506
      ]
    },
    {
      name: '左腕',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        -0.434258,
        -0.070982,
        -0.155688,
        0.884388
      ]
    },
    {
      name: '左腕捩',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        0,
        0,
        0,
        1
      ]
    },
    {
      name: '左ひじ',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        -0.272038,
        0.200928,
        0,
        0.941075
      ]
    },
    {
      name: '左手捩',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        0,
        0,
        0,
        1
      ]
    },
    {
      name: '左手首',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        0.124262,
        -0.443016,
        -0.36508,
        -0.809327
      ]
    },
    {
      name: '左袖',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        0,
        0,
        0,
        1
      ]
    },
    {
      name: '左親指１',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        -0.156937,
        -0.129655,
        0,
        0.979061
      ]
    },
    {
      name: '左親指２',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        0,
        0,
        0,
        1
      ]
    },
    {
      name: '左人指１',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        -0.137932,
        -0.181517,
        0,
        0.973666
      ]
    },
    {
      name: '左人指２',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        0,
        0,
        0,
        1
      ]
    },
    {
      name: '左人指３',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        0,
        0,
        0,
        1
      ]
    },
    {
      name: '左中指１',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        -0.026328,
        -0.042482,
        0,
        0.99875
      ]
    },
    {
      name: '左中指２',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        0,
        0,
        0,
        1
      ]
    },
    {
      name: '左中指３',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        0,
        0,
        0,
        1
      ]
    },
    {
      name: '左薬指１',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        0.054414,
        0.065167,
        0,
        0.996389
      ]
    },
    {
      name: '左薬指２',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        0,
        0,
        0,
        1
      ]
    },
    {
      name: '左薬指３',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        0,
        0,
        0,
        1
      ]
    },
    {
      name: '左小指１',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        0.106422,
        0.156019,
        0.01473,
        0.981893
      ]
    },
    {
      name: '左小指２',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        0,
        0,
        0,
        1
      ]
    },
    {
      name: '左小指３',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        0,
        0,
        0,
        1
      ]
    },
    {
      name: '左ｽｶｰﾄ前',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        -0.108702,
        -0.003196,
        0.043606,
        0.993113
      ]
    },
    {
      name: '左ｽｶｰﾄ後',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        -0.031608,
        -0.000565,
        -0.009141,
        0.999459
      ]
    },
    {
      name: '左足',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        0.019599,
        -0.213412,
        0.083914,
        0.973154
      ]
    },
    {
      name: '左ひざ',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        0,
        0,
        0,
        1
      ]
    },
    {
      name: '左足首',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        0,
        0,
        0,
        1
      ]
    },
    {
      name: '右髪１',
      translation: [
        0.031457,
        -0.02244,
        0.019064
      ],
      quaternion: [
        0.05219,
        -0.080134,
        0.055656,
        0.99386
      ]
    },
    {
      name: '右髪２',
      translation: [
        -0.020636,
        0.005676,
        0.002946
      ],
      quaternion: [
        0.09155,
        -0.028185,
        0.002646,
        0.995398
      ]
    },
    {
      name: '右髪３',
      translation: [
        0.038839,
        -0.034651,
        0.027884
      ],
      quaternion: [
        -0.067379,
        0.042276,
        0.078273,
        0.993754
      ]
    },
    {
      name: '右髪４',
      translation: [
        -0.005352,
        0.001595,
        -0.000632
      ],
      quaternion: [
        -0.091892,
        0.044829,
        0.091331,
        0.990558
      ]
    },
    {
      name: '右髪５',
      translation: [
        0.002437,
        -0.019661,
        -0.000929
      ],
      quaternion: [
        0.040835,
        0.021274,
        -0.003316,
        0.998934
      ]
    },
    {
      name: '右髪６',
      translation: [
        0.002594,
        -0.000369,
        0.000039
      ],
      quaternion: [
        0.042199,
        0.005887,
        -0.043903,
        0.998127
      ]
    },
    {
      name: '右肩',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        -0.314347,
        0.059472,
        -0.184239,
        0.929356
      ]
    },
    {
      name: '右腕',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        -0.148917,
        0.324401,
        0.181002,
        0.91642
      ]
    },
    {
      name: '右腕捩',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        0,
        0,
        0,
        1
      ]
    },
    {
      name: '右ひじ',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        -0.509512,
        0.792894,
        0.02171,
        0.333532
      ]
    },
    {
      name: '右手捩',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        0,
        0,
        0,
        1
      ]
    },
    {
      name: '右手首',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        0.315405,
        -0.109868,
        -0.398256,
        0.854306
      ]
    },
    {
      name: '右袖',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        0,
        0,
        0,
        1
      ]
    },
    {
      name: '右親指１',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        -0.071834,
        -0.539167,
        0.266196,
        0.795784
      ]
    },
    {
      name: '右親指２',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        0.13195,
        -0.316493,
        -0.361478,
        0.867037
      ]
    },
    {
      name: '右人指１',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        -0.08136,
        0.073701,
        0.182835,
        0.976996
      ]
    },
    {
      name: '右人指２',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        0,
        0,
        0,
        1
      ]
    },
    {
      name: '右人指３',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        0,
        0,
        -0.049979,
        0.99875
      ]
    },
    {
      name: '右中指１',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        0.050546,
        -0.061899,
        0.12922,
        0.98839
      ]
    },
    {
      name: '右中指２',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        0,
        0,
        -0.044985,
        0.998987
      ]
    },
    {
      name: '右中指３',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        0,
        0,
        0.064954,
        0.997889
      ]
    },
    {
      name: '右薬指１',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        0,
        0,
        0.655617,
        0.755093
      ]
    },
    {
      name: '右薬指２',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        0,
        0,
        0.601198,
        0.7991
      ]
    },
    {
      name: '右薬指３',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        0,
        0,
        0.773915,
        0.633289
      ]
    },
    {
      name: '右小指１',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        0,
        0,
        0.648033,
        0.761611
      ]
    },
    {
      name: '右小指２',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        0,
        0,
        0.727725,
        0.685868
      ]
    },
    {
      name: '右小指３',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        0,
        0,
        0.731145,
        0.682221
      ]
    },
    {
      name: '右ｽｶｰﾄ前',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        -0.034892,
        -0.001044,
        0.018763,
        0.999215
      ]
    },
    {
      name: '右ｽｶｰﾄ後',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        -0.022186,
        -0.003034,
        0.029414,
        0.999317
      ]
    },
    {
      name: '右足',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        0,
        0,
        0,
        1
      ]
    },
    {
      name: '右ひざ',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        0,
        0,
        0,
        1
      ]
    },
    {
      name: '右足首',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        0,
        0,
        0,
        1
      ]
    },
    {
      name: '両目',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        -0.000156,
        0.124623,
        0.002593,
        0.992201
      ]
    },
    {
      name: '前髪１',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        -0.10671,
        -0.014601,
        0.058062,
        0.992487
      ]
    },
    {
      name: '前髪２',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        -0.000744,
        0.000072,
        0.101567,
        0.994829
      ]
    },
    {
      name: '前髪３',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        -0.076416,
        -0.039423,
        -0.008418,
        0.996261
      ]
    },
    {
      name: '左目光',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        0,
        0,
        0,
        1
      ]
    },
    {
      name: '右目光',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        0,
        0,
        0,
        1
      ]
    },
    {
      name: 'ﾈｸﾀｲ４',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        0,
        0,
        0,
        1
      ]
    },
    {
      name: '左髪７',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        0,
        0,
        0,
        1
      ]
    },
    {
      name: '右髪７',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        0,
        0,
        0,
        1
      ]
    },
    {
      name: '左つま先',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        -0.235746,
        -0.002891,
        -0.003549,
        0.971803
      ]
    },
    {
      name: '右つま先',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        0,
        0,
        0,
        1
      ]
    },
    {
      name: 'ﾈｸﾀｲＩＫ',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        0,
        0,
        0,
        1
      ]
    },
    {
      name: '左髪ＩＫ',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        0,
        0,
        0,
        1
      ]
    },
    {
      name: '右髪ＩＫ',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        0,
        0,
        0,
        1
      ]
    },
    {
      name: '左足ＩＫ',
      translation: [
        -1.975501,
        1.000014,
        0.157219
      ],
      quaternion: [
        0.378374,
        -0.288495,
        0.125389,
        0.870563
      ]
    },
    {
      name: '右足ＩＫ',
      translation: [
        -1.871634,
        0.000013,
        -0.332146
      ],
      quaternion: [
        0,
        -0.305058,
        0,
        0.952333
      ]
    },
    {
      name: '左つま先ＩＫ',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        0,
        0,
        0,
        1
      ]
    },
    {
      name: '右つま先ＩＫ',
      translation: [
        0,
        0,
        0
      ],
      quaternion: [
        0,
        0,
        0,
        1
      ]
    }
  ]

  return {
    metadata: {
      coordinateSystem: 'right',
      parentFile: '初音ミク.osm;\t\t// 親ファイル名',
      boneCount: bones.length
    },
    bones
  }
}
