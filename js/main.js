    // Configuration
    const S3_UPLOAD_API = 'https://gez1c3ucte.execute-api.us-east-2.amazonaws.com/prod/generate-upload-url';
    const CALCULATE_API = 'https://gez1c3ucte.execute-api.us-east-2.amazonaws.com/prod/jobs';
    const API_ENDPOINT = 'https://gez1c3ucte.execute-api.us-east-2.amazonaws.com/prod/submit-video';  // ← ADD THIS
    const MAX_SONGS = 6;
    
    // Song Library
    // Song Library with S3 URLs
    const SONG_LIBRARY = [
      {
        id: 'abandoned-house-115974',
        name: 'abandoned-house-115974.mp3',
        displayName: 'Abandoned House - Violin | S. Pavkin | 4:32',
        genre: 'Classical',
        duration: '4:32',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/abandoned-house-115974.mp3'
      },
      {
        id: 'ave-maria-instrumental-150536',
        name: 'ave-maria-instrumental-150536.mp3',
        displayName: 'Ave Maria - instrumental | J. Monter | 4:30',
        genre: 'Classical',
        duration: '4:30',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/ave-maria-instrumental-150536.mp3'
      },
      {
        id: 'drowning-echoes-dramatic-orchestra-345956',
        name: 'drowning-echoes-dramatic-orchestra-345956.mp3',
        displayName: 'Drowning Echoes | L. Timachev | 1:35',
        genre: 'Classical',
        duration: '1:35',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/drowning-echoes-dramatic-orchestra-345956.mp3'
      },
      {
        id: 'farewell-to-w-111721',
        name: 'farewell-to-w-111721.mp3',
        displayName: 'Farwell to W | Jan Semmler| 1:56',
        genre: 'Classical',
        duration: '1:56',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/farewell-to-w-111721.mp3'
      },
      {
        id: 'funeral-165257',
        name: 'funeral-165257.mp3',
        displayName: 'Funeral | A. Chubarova | 1:39',
        genre: 'Classical',
        duration: '1:39',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/funeral-165257.mp3'
      },
      {
        id: 'funeral-memories-piano-334314',
        name: 'funeral-memories-piano-334314.mp3',
        displayName: 'Funeral Memories - Piano | O. F. Music | 2:10',
        genre: 'Classical',
        duration: '2:10',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/funeral-memories-piano-334314.mp3'
      },
      {
        id: 'lullaby-for-you-391546',
        name: 'lullaby-for-you-391546.mp3',
        displayName: 'Lullaby for You | Loli Valiente (v) | 3:10',
        genre: 'Pop/Folk/Celtic',
        duration: '3:10',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/lullaby-for-you-391546.mp3'
      },
      {
        id: 'beethoven-sonata-no14-op-27-moonlight-sonata-14237',
        name: 'beethoven-sonata-no14-op-27-moonlight-sonata-14237.mp3',
        displayName: 'Moonlight Sonata | Beethoven | 5:25',
        genre: 'Classical',
        duration: '5:25',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/beethoven-sonata-no14-op-27-moonlight-sonata-14237.mp3'
      },
      {
        id: 'pachelbelx27s-canon-canon-in-d-307319',
        name: 'pachelbelx27s-canon-canon-in-d-307319.mp3',
        displayName: 'Pachelbel\'s Canon (in D) | C. Clavier | 2:41',
        genre: 'Classical',
        duration: '2:41',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/pachelbelx27s-canon-canon-in-d-307319.mp3'
      },
      {
        id: 'pathetique-sonata-beethoven-350778',
        name: 'pathetique-sonata-beethoven-350778.mp3',
        displayName: 'Pathetique Sonata - Beethoven | J. Chauvel | 5:03',
        genre: 'Classical',
        duration: '5:03',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/pathetique-sonata-beethoven-350778.mp3'
      },
      {
        id: 'chopin-prelude-in-e-minor-165243',
        name: 'chopin-prelude-in-e-minor-165243.mp3',
        displayName: 'Prelude in e-minor | Chopin | 1:55',
        genre: 'Classical',
        duration: '1:55',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/chopin-prelude-in-e-minor-165243.mp3'
      },
      {
        id: 'remember-116568',
        name: 'remember-116568.mp3',
        displayName: 'Remember | Sergii Pavkin | 3:52',
        genre: 'Classical',
        duration: '3:52',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/remember-116568.mp3'
      },
      {
        id: 'sad-moment-sad-and-melancholy-piano-background-music-124488',
        name: 'sad-moment-sad-and-melancholy-piano-background-music-124488.mp3',
        displayName: 'Sad Moment | Oleg Fedak | 2:39',
        genre: 'Classical',
        duration: '2:39',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/sad-moment-sad-and-melancholy-piano-background-music-124488.mp3'
      },
      {
        id: 'sad-violin-150146',
        name: 'sad-violin-150146.mp3',
        displayName: 'Sad Violin | A. Chubarova | 1:56',
        genre: 'Classical',
        duration: '1:56',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/sad-violin-150146.mp3'
      },
      {
        id: 'country-background-349052',
        name: 'country-background-349052.mp3',
        displayName: 'Country Background - acoustic | T. Tank | 2:03',
        genre: 'Country',
        duration: '2:03',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/country-background-349052.mp3'
      },
      {
        id: 'country-rodeo-cowboy-ballad-music-full-351039',
        name: 'country-rodeo-cowboy-ballad-music-full-351039.mp3',
        displayName: 'Country Ballad - acoustic | U. Catch | 3:27',
        genre: 'Country',
        duration: '3:27',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/country-rodeo-cowboy-ballad-music-full-351039.mp3'
      },
      {
        id: 'dust-and-memory-420131',
        name: 'dust-and-memory-420131.mp3',
        displayName: 'Dust and Memory - acoustic | S. Koushik | 3:02',
        genre: 'Country',
        duration: '3:02',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/dust-and-memory-420131.mp3'
      },
      {
        id: 'empty-chair-at-the-table-250271',
        name: 'empty-chair-at-the-table-250271.mp3',
        displayName: 'Empty Chair at the Table (v) | T. Keiji | 3:26',
        genre: 'Country',
        duration: '3:26',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/empty-chair-at-the-table-250271.mp3'
      },
      {
        id: 'hands-to-heaven-318378',
        name: 'hands-to-heaven-318378.mp3',
        displayName: 'Hands to Heaven (v) | T. Keiji | 3:41',
        genre: 'Country',
        duration: '3:41',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/hands-to-heaven-318378.mp3'
      },
      {
        id: 'i-only-loved-lucy-243840',
        name: 'i-only-loved-lucy-243840.mp3',
        displayName: 'I Only Loved Lucy - acoustic | Alan Jordan | 1:51',
        genre: 'Country',
        duration: '1:51',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/i-only-loved-lucy-243840.mp3'
      },
      {
        id: 'meet-you-in-texas-243843',
        name: 'meet-you-in-texas-243843.mp3',
        displayName: 'I\'ll Meet You in Texas - guitar | Alan Jordan | 3:10',
        genre: 'Country',
        duration: '3:10',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/meet-you-in-texas-243843.mp3'
      },
      {
        id: 'in-god-we-trust-307905',
        name: 'in-god-we-trust-307905.mp3',
        displayName: 'In God We Trust (v) | Phill Buck | 4:00',
        genre: 'Country',
        duration: '4:00',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/in-god-we-trust-307905.mp3'
      },
      {
        id: 'instrumental-music-acoustic-country-193189',
        name: 'instrumental-music-acoustic-country-193189.mp3',
        displayName: 'Instrumental Acoustic Country | T. Lam | 4:12',
        genre: 'Country',
        duration: '4:12',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/instrumental-music-acoustic-country-193189.mp3'
      },
      {
        id: 'Acoustic-mix-gospel-worship-400470',
        name: 'Acoustic-mix-gospel-worship-400470.mp3',
        displayName: 'Accoustic Mix Gospel Worship | A. Poraddovsky | 5:08',
        genre: 'Gospel',
        duration: '5:08',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/Acoustic-mix-gospel-worship-400470.mp3'
      },
      {
        id: 'gospel-worship-amazing-grace-347221',
        name: 'gospel-worship-amazing-grace-347221.mp3',
        displayName: 'Amazing Grace (v) | TuneTank | 5:39',
        genre: 'Gospel',
        duration: '5:39',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/gospel-worship-amazing-grace-347221.mp3'
      },
      {
        id: 'ave-maria-vocal-417992',
        name: 'ave-maria-vocal-417992.mp3',
        displayName: 'Ave Maria (v) | N. Panek | 3:31',
        genre: 'Gospel',
        duration: '3:31',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/ave-maria-vocal-417992.mp3'
      },
      {
        id: 'cathedral-164234',
        name: 'cathedral-164234.mp3',
        displayName: 'Cathedral - Choir | A. Chubarova  | 1:25',
        genre: 'Gospel',
        duration: '1:25',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/cathedral-164234.mp3'
      },
      {
        id: 'gospel-ballad-boys-choir-humming-4216',
        name: 'gospel-ballad-boys-choir-humming-4216.mp3',
        displayName: 'Gospel Ballad Boys Choir | Juliius H. | 4:06',
        genre: 'Gospel',
        duration: '4:06',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/gospel-ballad-boys-choir-humming-4216.mp3'
      },
      {
        id: 'gospel-worship-christian-church-music-323163',
        name: 'gospel-worship-christian-church-music-323163.mp3',
        displayName: 'Gospel Worship | L. Poltavskyi | 2:13',
        genre: 'Gospel',
        duration: '2:13',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/gospel-worship-christian-church-music-323163.mp3'
      },
      {
        id: 'voices-of-eternity-church-cathedral-choir-195196',
        name: 'voices-of-eternity-church-cathedral-choir-195196.mp3',
        displayName: 'Voices of Eternity - Choir | Natalia | 2:34',
        genre: 'Gospel',
        duration: '2:34',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/voices-of-eternity-church-cathedral-choir-195196.mp3'
      },
      {
        id: 'you-restore-my-soul-413723',
        name: 'you-restore-my-soul-413723.mp3',
        displayName: 'You Restore My Soul (v) | J. Haryanto | 2:56',
        genre: 'Gospel',
        duration: '2:56',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/you-restore-my-soul-413723.mp3'
      },
      {
        id: 'across-the-oceans-269104',
        name: 'across-the-oceans-269104.mp3',
        displayName: 'Across the Oceans (v) | D. Ram | 3:49',
        genre: 'Pop/Folk/Celtic',
        duration: '3:49',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/across-the-oceans-269104.mp3'
      },
      {
        id: 'eulogy-ambient-piano-196437',
        name: 'eulogy-ambient-piano-196437.mp3',
        displayName: 'Eulogy - Ambient Piano | Liderc | 1:15',
        genre: 'Pop/Folk/Celtic',
        duration: '1:15',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/eulogy-ambient-piano-196437.mp3'
      },
      {
        id: 'farewell-full-of-love-346874',
        name: 'farewell-full-of-love-346874.mp3',
        displayName: 'Farewell Full Of Love (v) | E. Wyns | 3:46',
        genre: 'Pop/Folk/Celtic',
        duration: '3:46',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/farewell-full-of-love-346874.mp3'
      },
      {
        id: 'heart-of-the-highlands-celtic-342779',
        name: 'heart-of-the-highlands-celtic-342779.mp3',
        displayName: 'Heart of the Highlands - Celtic | P. Winter | 4:24',
        genre: 'Pop/Folk/Celtic',
        duration: '4:24',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/heart-of-the-highlands-celtic-342779.mp3'
      },
      {
        id: 'heartbroken-winter-instrumental-306095',
        name: 'heartbroken-winter-instrumental-306095.mp3',
        displayName: 'Heartbroken Winter - instrumental | S. Koushik | 3:22',
        genre: 'Pop/Folk/Celtic',
        duration: '3:22',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/heartbroken-winter-instrumental-306095.mp3'
      },
      {
        id: 'instrumental-pop-339552',
        name: 'instrumental-pop-339552.mp3',
        displayName: 'Instrumental Pop  | J. January | 3:39',
        genre: 'Pop/Folk/Celtic',
        duration: '3:39',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/instrumental-pop-339552.mp3'
      },
      {
        id: 'ki-instrumental-ambient-337501',
        name: 'ki-instrumental-ambient-337501.mp3',
        displayName: 'KI - Instrumental Ambient | S. Wurtz | 2:51',
        genre: 'Pop/Folk/Celtic',
        duration: '2:51',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/ki-instrumental-ambient-337501.mp3'
      },
      {
        id: 'life-with-you-297782',
        name: 'life-with-you-297782.mp3',
        displayName: 'Life With You - instrumental | M. Dembitsky | 2:20',
        genre: 'Pop/Folk/Celtic',
        duration: '2:20',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/life-with-you-297782.mp3'
      },
      {
        id: 'sad-song-326267',
        name: 'sad-song-326267.mp3',
        displayName: 'Sad Song | R. Dutta | 3:57',
        genre: 'Pop/Folk/Celtic',
        duration: '3:57',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/sad-song-326267.mp3'
      },
      {
        id: 'emerald-isles-celtic-342785',
        name: 'emerald-isles-celtic-342785.mp3',
        displayName: 'The Emerald Isles - Celtic | P. Winter | 3:26',
        genre: 'Pop/Folk/Celtic',
        duration: '3:26',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/emerald-isles-celtic-342785.mp3'
      },
      {
        id: 'the-hands-that-loved-me-301869',
        name: 'the-hands-that-loved-me-301869.mp3',
        displayName: 'The Hands that Loved Me (v) | S. Evans | 2:38',
        genre: 'Pop/Folk/Celtic',
        duration: '2:38',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/the-hands-that-loved-me-301869.mp3'
      },
      {
        id: 'tomorrow-144278',
        name: 'tomorrow-144278.mp3',
        displayName: 'Tomorrow - instrumental | H. Jeon | 2:06',
        genre: 'Pop/Folk/Celtic',
        duration: '2:06',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/tomorrow-144278.mp3'
      },
      {
        id: 'today-we-are-tomorrow-we-fade-1-312133',
        name: 'today-we-are-tomorrow-we-fade-1-312133.mp3',
        displayName: 'Tomorrow we Fade (v) | Jetty Jan | 3:06',
        genre: 'Pop/Folk/Celtic',
        duration: '3:06',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/today-we-are-tomorrow-we-fade-1-312133.mp3'
      },
      {
        id: 'emotional-uplifting-piano-165257',
        name: 'emotional-uplifting-piano-165257.mp3',
        displayName: 'Emotional Uplifting Piano | A. Chubarova | 2:39',
        genre: 'Uplifting',
        duration: '2:39',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/emotional-uplifting-piano-165257.mp3'
      },
      {
        id: 'friends-upbeat-instrumental-287543',
        name: 'friends-upbeat-instrumental-287543.mp3',
        displayName: 'Friends (upbeat instrumental) | M.W. Pyccnn | 2:04',
        genre: 'Uplifting',
        duration: '2:04',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/friends-upbeat-instrumental-287543.mp3'
      },
      {
        id: 'fun-happy-instrumental-342891',
        name: 'fun-happy-instrumental-342891.mp3',
        displayName: 'Fun & Happy (instrumental) | O. Savochka | 2:09',
        genre: 'Uplifting',
        duration: '2:09',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/fun-happy-instrumental-342891.mp3'
      },
      {
        id: 'golden-dayz-upbeat-ukulele-456123',
        name: 'golden-dayz-upbeat-ukulele-456123.mp3',
        displayName: 'Golden Dayz (upbeat ukulele) | P. Winter | 3:00',
        genre: 'Uplifting',
        duration: '3:00',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/golden-dayz-upbeat-ukulele-456123.mp3'
      },
      {
        id: 'happy-background-music-567234',
        name: 'happy-background-music-567234.mp3',
        displayName: 'Happy Background Music | A. Poradovskyi | 2:12',
        genre: 'Uplifting',
        duration: '2:12',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/happy-background-music-567234.mp3'
      },
      {
        id: 'happy-flute-678345',
        name: 'happy-flute-678345.mp3',
        displayName: 'Happy Flute | M. Mosca | 2:04',
        genre: 'Uplifting',
        duration: '2:04',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/happy-flute-678345.mp3'
      },
      {
        id: 'happy-jazz-789456',
        name: 'happy-jazz-789456.mp3',
        displayName: 'Happy Jazz | John Schofield | 2:08',
        genre: 'Uplifting',
        duration: '2:08',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/happy-jazz-789456.mp3'
      },
      {
        id: 'inspirational-uplifting-music-891567',
        name: 'inspirational-uplifting-music-891567.mp3',
        displayName: 'Inspirational Uplifting Music | TataMusic | 2:00',
        genre: 'Uplifting',
        duration: '2:00',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/inspirational-uplifting-music-891567.mp3'
      },
      {
        id: 'jazz-background-instrumental-912678',
        name: 'jazz-background-instrumental-912678.mp3',
        displayName: 'Jazz Background (Instr.) | A. Poradovskyi | 5:55',
        genre: 'Uplifting',
        duration: '5:55',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/jazz-background-instrumental-912678.mp3'
      },
      {
        id: 'petites-funerailles-organ-123789',
        name: 'petites-funerailles-organ-123789.mp3',
        displayName: 'Petites funérailles (organ) | J.P. Verpeaux | 4:00',
        genre: 'Uplifting',
        duration: '4:00',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/petites-funerailles-organ-123789.mp3'
      },
      {
        id: 'piano-background-234891',
        name: 'piano-background-234891.mp3',
        displayName: 'Piano Background | D. Kolesnikov | 2:40',
        genre: 'Uplifting',
        duration: '2:40',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/piano-background-234891.mp3'
      },
      {
        id: 'under-a-starry-sky-orchestra-345912',
        name: 'under-a-starry-sky-orchestra-345912.mp3',
        displayName: 'Under A Starry Sky (Orchestra) | P. Winter | 3:02',
        genre: 'Uplifting',
        duration: '3:02',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/under-a-starry-sky-orchestra-345912.mp3'
      },
      {
        id: 'uplifting-inspirational-music-456123',
        name: 'uplifting-inspirational-music-456123.mp3',
        displayName: 'Uplifting Inspirational Music | M. Malko | 4:07',
        genre: 'Uplifting',
        duration: '4:07',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/uplifting-inspirational-music-456123.mp3'
      },
      {
        id: 'uplifting-piano-is-567234',
        name: 'uplifting-piano-is-567234.mp3',
        displayName: 'Uplifting Piano Is | Music Unlimited | 1:10',
        genre: 'Uplifting',
        duration: '1:10',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/uplifting-piano-is-567234.mp3'
      },
      {
        id: 'uplifting-ukulele-678345',
        name: 'uplifting-ukulele-678345.mp3',
        displayName: 'Uplifting Ukulele | D. Silverstone | 2:04',
        genre: 'Uplifting',
        duration: '2:04',
        url: 'https://order-by-age-uploads.s3.us-east-2.amazonaws.com/library-songs/uplifting-ukulele-678345.mp3'
      }
    ];

    // Transition preview video mapping
    const TRANSITION_VIDEOS = {
      'simple-fade-wipe': 'https://www.dropbox.com/scl/fi/368hwkwqhtks5v9e3j1es/Transition-Examples-Simple-Fade-and-Wipe-3.mp4?rlkey=nvwfk02kf55096zyoquc85u3c&st=9deaz85e&dl=1',
      'pages-of-life': 'https://www.dropbox.com/scl/fi/o285ltxtsrpqws5gvaw3h/Transition-Examples-Pages-of-Life-2.mp4?rlkey=xkhdb1oa8wd0m46vgewi3gp9f&st=zv8vokof&raw=1',
      'floating-frames': 'https://www.dropbox.com/scl/fi/l7ifvko5rdumtp2ssa1cb/Transition-Examples-Floating-Frames-2.mp4?rlkey=seyficxdrpnu9vmg63ydbw09i&st=lgbll6sa&raw=1',
      'zoom-through': 'https://www.dropbox.com/scl/fi/xbochmmlgl0v430lo7l6q/Transition-Examples-Zoom-Through-2.mp4?rlkey=kkgfphukmjg2sa8m69egd36nq&st=9hr8hm8c&raw=1',
      'blinds-combs-bars': 'https://www.dropbox.com/scl/fi/yu49ywzg9lnpfvbkpngun/Transition-Examples-Blinds-Combs-Bars-2.mp4?rlkey=itoxqenf61i2cm746kvn2fjbl&st=wk0xl254&raw=1'
    };
    
    // Mobile detection helper
    function isMobileDevice() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
        || window.innerWidth <= 768;
    }
    
    // Parse URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const uid = urlParams.get('uid');
    const email = urlParams.get('email');
    const customerFirstName = urlParams.get('customerFirstName') || 'there';
    const firstName = urlParams.get('firstName') || 'there';
    const fullName = urlParams.get('fullName') || '';
    const slideshowUrl = urlParams.get('slideshowUrl') || '';
    const dropboxUrl = urlParams.get('dropboxUrl') || '';
    
    // State
    let selectedSongs = [];
    let currentlyPlayingAudio = null;
    let songRanges = [];
    let cachedPresentationUrl = null;  // Cache uploaded PPTX URL to avoid double upload

    // Helper function to get total seconds from minute/second dropdowns
    function getFixedRuntimeSeconds() {
      const minutes = parseInt(document.getElementById('fixedRuntimeMinutes').value) || 6;
      const seconds = parseInt(document.getElementById('fixedRuntimeSeconds').value) || 0;
      return (minutes * 60) + seconds;
    }
    
    // Initialize
    if (!uid || !email) {
      showToast('Missing required parameters in URL', 'error');
    } else {
      initializePage();
    }
    
    function initializePage() {
      // Set up slideshow preview
      setupSlideshowPreview();

      // Update header with deceased person's name if available
      if (firstName && firstName !== '' && firstName !== 'there') {
        document.getElementById('headerTitle').textContent = `✨ Customize Memorial Video for ${firstName}`;
        document.title = `Memorial Video for ${fullName}`;
      }
      
      // Render song library
      renderLibrary();
      renderSongList();
      updateSongCount();
      
      // Setup event listeners
      setupEventListeners();
      
      // Validate form
      validateForm();
    }
    
function setupSlideshowPreview() {
  const iframe = document.getElementById('previewIframe');
  const urlDisplay = document.getElementById('previewUrl');
  const previewSection = document.getElementById('slideshowPreview');
  const previewHeader = document.getElementById('previewHeader');

  // Grab the slideshow URL from query params
  const urlParams = new URLSearchParams(window.location.search);
  const slideshowUrl = urlParams.get('slideshowUrl');

  if (slideshowUrl) {
    let embedUrl = slideshowUrl;

    // === GOOGLE SLIDES HANDLING ===
    if (slideshowUrl.includes('docs.google.com/presentation')) {
      embedUrl = slideshowUrl.replace('/edit', '/embed');

      previewHeader.textContent = '🔍 Preview: Original Google Slides';
      previewSection.style.display = 'block';
      iframe.src = embedUrl;
      document.getElementById('editSlidesButton').href = slideshowUrl;
    }

    // === POWERPOINT / ONEDRIVE / SHAREPOINT HANDLING ===
    else if (
      slideshowUrl.includes('sharepoint.com') ||
      slideshowUrl.includes('onedrive.live.com') ||
      slideshowUrl.includes('1drv.ms')
    ) {
      previewHeader.textContent = '🔍 Preview: Original PowerPoint';
      previewSection.style.display = 'block';
      
      if (isMobileDevice()) {
        // Mobile: Show "tap to view" button instead of embed
        const iframeContainer = iframe.parentElement;
        iframe.style.display = 'none';
        
        const existingButton = iframeContainer.querySelector('.mobile-preview-btn');
        if (!existingButton) {
          const mobileButton = document.createElement('a');
          mobileButton.href = slideshowUrl;
          mobileButton.target = '_blank';
          mobileButton.className = 'mobile-preview-btn';
          mobileButton.style.cssText = `
            display: block; 
            padding: 40px; 
            background: white; 
            border: 2px solid #90caf9; 
            border-radius: 8px; 
            text-align: center; 
            text-decoration: none; 
            color: #1565c0;
            font-weight: 600; 
            font-size: 16px;
            margin: 10px 0;
          `;
          mobileButton.innerHTML = '📱 Tap to View PowerPoint in New Tab';
          iframeContainer.appendChild(mobileButton);
        }
      } else {
        // Desktop: Use embed
        iframe.style.display = 'block';
        const existingButton = iframe.parentElement.querySelector('.mobile-preview-btn');
        if (existingButton) existingButton.remove();
        
        let embedUrl = slideshowUrl;
        if (!slideshowUrl.includes('action=embedview')) {
          const separator = slideshowUrl.includes('?') ? '&' : '?';
          embedUrl = slideshowUrl + separator + 'action=embedview&wdStartOn=1&em=2';
        }
        iframe.src = embedUrl;
      }
      
      document.getElementById('editSlidesButton').href = slideshowUrl;
      console.log('[PREVIEW] PowerPoint setup complete');
    }
  } 
}
    
    function setupEventListeners() {
      // Slideshow version radio buttons
      document.querySelectorAll('input[name="slideshowVersion"]').forEach(radio => {
        radio.addEventListener('change', handleSlideshowVersionChange);
      });
      
      // PowerPoint method radio buttons (file vs URL)
      document.querySelectorAll('input[name="pptxMethod"]').forEach(radio => {
        radio.addEventListener('change', handlePptxMethodChange);
      });
      
      // New Google Slides URL input - update preview on input
      document.getElementById('newGoogleSlidesUrl').addEventListener('input', (e) => {
        const selectedVersion = document.querySelector('input[name="slideshowVersion"]:checked').value;
        if (selectedVersion === 'copy') {
          updateCopyPreview(e.target.value);
        }
        validateForm();
      });
      
      // PowerPoint URL input - update preview on input
      document.getElementById('pptxUrl').addEventListener('input', (e) => {
        const selectedVersion = document.querySelector('input[name="slideshowVersion"]:checked').value;
        if (selectedVersion === 'download') {
          updatePowerPointUrlPreview(e.target.value);
        }
        validateForm();
      });
      
      // PowerPoint file upload - show filename
      document.getElementById('pptxFile').addEventListener('change', (e) => {
        const file = e.target.files[0];
        const selectedVersion = document.querySelector('input[name="slideshowVersion"]:checked').value;
        
        if (file && selectedVersion === 'download') {
          document.getElementById('pptxFileName').textContent = file.name;
          document.getElementById('pptxFilePreview').style.display = 'block';
          document.getElementById('slideshowPreview').style.display = 'none';
        }
        validateForm();
      });
      
      // Timing mode radio buttons
      document.querySelectorAll('input[name="timingMode"]').forEach(radio => {
        radio.addEventListener('change', handleTimingModeChange);
      });
      
      // Custom song upload
      document.getElementById('uploadLabel').addEventListener('click', showMusicTermsModal);
      document.getElementById('customSongUpload').addEventListener('change', handleCustomSongUpload);
      
      // Form changes
      document.querySelectorAll('select, input').forEach(element => {
        element.addEventListener('change', validateForm);
        element.addEventListener('input', validateForm);
      });

      // Music distribution change handler
      document.getElementById('musicDistribution').addEventListener('change', (e) => {
        const value = e.target.value;
        handleMusicDistributionChange(value);
      });

      // Duration calculator triggers
      document.getElementById('perSlideSec').addEventListener('input', calculateVideoDuration);
      document.getElementById('fixedRuntimeMinutes').addEventListener('change', calculateVideoDuration);
      document.getElementById('fixedRuntimeSeconds').addEventListener('change', calculateVideoDuration);
      
    }
    
    function handleSlideshowVersionChange(e) {
      const value = e.target.value;
      console.log('[DEBUG] Slideshow version changed to:', value);
  
      // Update radio option selected class
      document.querySelectorAll('.radio-option').forEach(opt => {
        opt.classList.remove('selected');
      });
      e.target.closest('.radio-option').classList.add('selected');
  
      // Show/hide conditional inputs
      const copyInput = document.getElementById('copyUrlInput');
      const downloadInput = document.getElementById('downloadInput');
  
      console.log('[DEBUG] copyUrlInput element:', copyInput);
      console.log('[DEBUG] downloadInput element:', downloadInput);
  
      copyInput.style.display = value === 'copy' ? 'block' : 'none';
      downloadInput.style.display = value === 'download' ? 'block' : 'none';
  
      console.log('[DEBUG] copyUrlInput display:', copyInput.style.display);
      console.log('[DEBUG] downloadInput display:', downloadInput.style.display);
      
      // Handle preview visibility
      const slideshowPreview = document.getElementById('slideshowPreview');
      const pptxFilePreview = document.getElementById('pptxFilePreview');
      const iframe = document.getElementById('previewIframe');
      const urlDisplay = document.getElementById('previewUrl');
      const previewHeader = document.getElementById('previewHeader');
      
      // Hide all previews first
      slideshowPreview.style.display = 'none';
      pptxFilePreview.style.display = 'none';
      
      if (value === 'original') {
        // Show original slideshow preview
        if (slideshowUrl) {
          let embedUrl = slideshowUrl;
          if (slideshowUrl.includes('docs.google.com/presentation')) {
            embedUrl = slideshowUrl.replace('/edit', '/embed');
            previewHeader.textContent = '🔍 Preview: Original Slideshow';
            iframe.src = embedUrl;
            document.getElementById('editSlidesButton').href = slideshowUrl;
            slideshowPreview.style.display = 'block';
          } else if (slideshowUrl.includes('onedrive.live.com') || slideshowUrl.includes('sharepoint.com') || slideshowUrl.includes('1drv.ms')) {
            previewHeader.textContent = '🔍 Preview: Original PowerPoint';
            
            if (isMobileDevice()) {
              // Mobile: Show button
              iframe.style.display = 'none';
              const iframeContainer = iframe.parentElement;
              const existingButton = iframeContainer.querySelector('.mobile-preview-btn');
              if (!existingButton) {
                const mobileButton = document.createElement('a');
                mobileButton.href = slideshowUrl;
                mobileButton.target = '_blank';
                mobileButton.className = 'mobile-preview-btn';
                mobileButton.style.cssText = `
                  display: block; 
                  padding: 40px; 
                  background: white; 
                  border: 2px solid #90caf9; 
                  border-radius: 8px; 
                  text-align: center; 
                  text-decoration: none; 
                  color: #1565c0;
                  font-weight: 600; 
                  font-size: 16px;
                  margin: 10px 0;
                `;
                mobileButton.innerHTML = '📱 Tap to View PowerPoint in New Tab';
                iframeContainer.appendChild(mobileButton);
              }
            } else {
              // Desktop: Use embed
              iframe.style.display = 'block';
              const existingButton = iframe.parentElement.querySelector('.mobile-preview-btn');
              if (existingButton) existingButton.remove();
              
              let embedUrl = slideshowUrl;
              if (!slideshowUrl.includes('action=embedview')) {
                const separator = slideshowUrl.includes('?') ? '&' : '?';
                embedUrl = slideshowUrl + separator + 'action=embedview&wdStartOn=1&em=2';
              } else {
                embedUrl = slideshowUrl;
              }
              iframe.src = embedUrl;
            }
            
            document.getElementById('editSlidesButton').href = slideshowUrl;
            slideshowPreview.style.display = 'block';
          }
        }
      } else if (value === 'copy') {
        // Preview will update when user enters URL (handled in input event listener)
        const newUrl = document.getElementById('newGoogleSlidesUrl').value;
        if (newUrl) {
          updateCopyPreview(newUrl);
        }
      } else if (value === 'download') {
        // Check if file is uploaded
        const pptxFile = document.getElementById('pptxFile').files[0];
        const pptxUrl = document.getElementById('pptxUrl').value;
        
        if (pptxFile) {
          document.getElementById('pptxFileName').textContent = pptxFile.name;
          pptxFilePreview.style.display = 'block';
        } else if (pptxUrl) {
          updatePowerPointUrlPreview(pptxUrl);
        }
      }
      
      validateForm();
    }

    function handlePptxMethodChange(e) {
      const value = e.target.value;
      const fileSection = document.getElementById('pptxFileSection');
      const urlSection = document.getElementById('pptxUrlSection');
      const pptxFilePreview = document.getElementById('pptxFilePreview');
      const slideshowPreview = document.getElementById('slideshowPreview');
      
      // Hide both sections and previews first
      fileSection.style.display = 'none';
      urlSection.style.display = 'none';
      pptxFilePreview.style.display = 'none';
      slideshowPreview.style.display = 'none';
      
      // Clear the opposite field
      if (value === 'file') {
        fileSection.style.display = 'block';
        document.getElementById('pptxUrl').value = '';
      } else if (value === 'url') {
        urlSection.style.display = 'block';
        document.getElementById('pptxFile').value = '';
      }
      
      validateForm();
    }
    
    function updateCopyPreview(url) {
      const slideshowPreview = document.getElementById('slideshowPreview');
      const iframe = document.getElementById('previewIframe');
      const previewHeader = document.getElementById('previewHeader');

      // Hide first
      slideshowPreview.style.display = 'none';

      if (url && url.includes('docs.google.com/presentation')) {
        // --- Google Slides embed ---
        const embedUrl = url.replace('/edit', '/embed');
        previewHeader.textContent = '🔍 Preview: Your Google Slides Copy';
        iframe.src = embedUrl;
        document.getElementById('editSlidesButton').href = url;
        slideshowPreview.style.display = 'block';
      } else if (url && (url.includes('sharepoint.com') || url.includes('onedrive.live.com') || url.includes('1drv.ms'))) {
        previewHeader.textContent = '🔍 Preview: Your PowerPoint Copy';
        
        if (isMobileDevice()) {
          // Mobile: Show button
          const iframeContainer = iframe.parentElement;
          iframe.style.display = 'none';
          
          let existingButton = iframeContainer.querySelector('.mobile-preview-btn');
          if (existingButton) {
            existingButton.href = url;
          } else {
            const mobileButton = document.createElement('a');
            mobileButton.href = url;
            mobileButton.target = '_blank';
            mobileButton.className = 'mobile-preview-btn';
            mobileButton.style.cssText = `
              display: block; 
              padding: 40px; 
              background: white; 
              border: 2px solid #90caf9; 
              border-radius: 8px; 
              text-align: center; 
              text-decoration: none; 
              color: #1565c0;
              font-weight: 600; 
              font-size: 16px;
              margin: 10px 0;
            `;
            mobileButton.innerHTML = '📱 Tap to View PowerPoint in New Tab';
            iframeContainer.appendChild(mobileButton);
          }
        } else {
          // Desktop: Use embed
          iframe.style.display = 'block';
          const existingButton = iframe.parentElement.querySelector('.mobile-preview-btn');
          if (existingButton) existingButton.remove();
          
          let embedUrl = url;
          if (!url.includes('action=embedview')) {
            const separator = url.includes('?') ? '&' : '?';
            embedUrl = url + separator + 'action=embedview&wdStartOn=1&em=2';
          }
          iframe.src = embedUrl;
        }
        
        document.getElementById('editSlidesButton').href = url;
        slideshowPreview.style.display = 'block';
        console.log('[PREVIEW] PowerPoint copy preview updated');
      } else {
        slideshowPreview.style.display = 'none';
      }
    }

    
    function updatePowerPointUrlPreview(url) {
      const slideshowPreview = document.getElementById('slideshowPreview');
      const pptxFilePreview = document.getElementById('pptxFilePreview');
      const iframe = document.getElementById('previewIframe');
      const previewHeader = document.getElementById('previewHeader');

      slideshowPreview.style.display = 'none';
      pptxFilePreview.style.display = 'none';

      if (url && (url.includes('sharepoint.com') || url.includes('onedrive.live.com') || url.includes('1drv.ms'))) {
        previewHeader.textContent = '🔍 Preview: PowerPoint (Online)';
        
        if (isMobileDevice()) {
          // Mobile: Show button
          const iframeContainer = iframe.parentElement;
          iframe.style.display = 'none';
          
          let existingButton = iframeContainer.querySelector('.mobile-preview-btn');
          if (existingButton) {
            existingButton.href = url;
          } else {
            const mobileButton = document.createElement('a');
            mobileButton.href = url;
            mobileButton.target = '_blank';
            mobileButton.className = 'mobile-preview-btn';
            mobileButton.style.cssText = `
              display: block; 
              padding: 40px; 
              background: white; 
              border: 2px solid #90caf9; 
              border-radius: 8px; 
              text-align: center; 
              text-decoration: none; 
              color: #1565c0;
              font-weight: 600; 
              font-size: 16px;
              margin: 10px 0;
            `;
            mobileButton.innerHTML = '📱 Tap to View PowerPoint in New Tab';
            iframeContainer.appendChild(mobileButton);
          }
        } else {
          // Desktop: Use embed
          iframe.style.display = 'block';
          const existingButton = iframe.parentElement.querySelector('.mobile-preview-btn');
          if (existingButton) existingButton.remove();
          
          let embedUrl = url;
          if (!url.includes('action=embedview')) {
            const separator = url.includes('?') ? '&' : '?';
            embedUrl = url + separator + 'action=embedview&wdStartOn=1&em=2';
          }
          iframe.src = embedUrl;
        }
        
        document.getElementById('editSlidesButton').href = url;
        slideshowPreview.style.display = 'block';
        console.log('[PREVIEW] PowerPoint URL preview updated');
      }
    }
    
    function handleTimingModeChange(e) {
      const value = e.target.value;
      
      // Update radio option selected class
      document.querySelectorAll('.radio-option').forEach(opt => {
        opt.classList.remove('selected');
      });
      e.target.closest('.radio-option').classList.add('selected');
      
      // Show/hide conditional inputs
      document.getElementById('perSlideInput').style.display = value === 'perSlide' ? 'block' : 'none';
      document.getElementById('fixedRuntimeInput').style.display = value === 'fixedRuntime' ? 'block' : 'none';

      calculateVideoDuration();
      validateForm();
    }
    
    function renderLibrary() {
      const container = document.getElementById('libraryGrid');
      const selectedGenre = document.getElementById('genreSelect').value;
  
      // Filter songs by selected genre
      const filteredSongs = SONG_LIBRARY.filter(song => song.genre === selectedGenre);
      
      let html = '';
      filteredSongs.forEach(song => {
        const isAdded = selectedSongs.some(s => s.id === song.id);
        const cardClass = isAdded ? 'library-song-card added' : 'library-song-card';
        const btnClass = isAdded ? 'btn-add-library added' : 'btn-add-library';
        const btnText = isAdded ? '✓ Added' : '+ Add Song';
        const audioId = `audio-lib-${song.id}`;
        
        html += `
          <div class="${cardClass}" data-song-id="${song.id}">
            <div class="library-song-name">${song.displayName}</div>
            <div class="library-song-controls">
              <button class="btn-small btn-play" onclick="togglePlay('${audioId}', this)">▶️ Play Song</button>
              <button class="${btnClass}" onclick="addLibrarySong('${song.id}')" ${isAdded || selectedSongs.length >= MAX_SONGS ? 'disabled' : ''}>
                ${btnText}
              </button>
            </div>
            <audio id="${audioId}" src="${song.url}" preload="none"></audio>
          </div>
        `;
      });
      
      container.innerHTML = html;
    }
    
    function addLibrarySong(songId) {
      if (selectedSongs.length >= MAX_SONGS) {
        showToast(`Maximum ${MAX_SONGS} songs reached`, 'error');
        return;
      }
      
      const libSong = SONG_LIBRARY.find(s => s.id === songId);
      if (!libSong) return;
      
      if (selectedSongs.some(s => s.id === songId)) {
        showToast('Song already added', 'error');
        return;
      }
      
      selectedSongs.push({
        id: libSong.id,
        name: libSong.name,
        displayName: libSong.displayName,
        url: libSong.url,
        isLibrary: true,
        file: null,
        duration: libSong.duration
      });
      
      renderLibrary();
      renderSongList();
      updateSongCount();
      updateSongRangeSliders();
      calculateVideoDuration();
      validateForm();
      showToast(`Added "${libSong.displayName}"`, 'success');
    }
    
    function renderSongList() {
      const container = document.getElementById('songList');
      
      if (selectedSongs.length === 0) {
        container.innerHTML = '<div style="color: #999; font-style: italic; padding: 20px; text-align: center;">No songs selected. Choose from the library above or upload your own!</div>';
        return;
      }
      
      let html = '';
      selectedSongs.forEach((song, index) => {
        const audioId = `audio-${song.id}`;
        const badge = song.isLibrary ? '<span class="song-badge library">LIBRARY</span>' : '<span class="song-badge">CUSTOM</span>';
        const itemClass = song.isLibrary ? 'song-item library-song' : 'song-item new-upload';
        
        html += `
          <div class="${itemClass}">
            <div class="song-info">
              <div class="song-position">${index + 1}</div>
              <span class="song-name">${song.displayName}</span>
              ${badge}
            </div>
            <div class="song-controls">
              ${song.url ? `<button class="btn-small btn-play" onclick="togglePlay('${audioId}', this)">▶️ Play Song</button>` : ''}
              <button class="btn-small btn-move" onclick="moveSongUp(${index})" ${index === 0 ? 'disabled' : ''}>⬆️ Move Up</button>
              <button class="btn-small btn-move" onclick="moveSongDown(${index})" ${index === selectedSongs.length - 1 ? 'disabled' : ''}>⬇️ Move Down</button>
              <button class="btn-small btn-danger" onclick="removeSong(${index})">🗑️</button>
            </div>
            ${song.url ? `<audio id="${audioId}" src="${song.url}" preload="none"></audio>` : ''}
          </div>
        `;
      });
      
      container.innerHTML = html;
    }
    
    function togglePlay(audioId, button) {
      const audio = document.getElementById(audioId);
      
      if (currentlyPlayingAudio && currentlyPlayingAudio !== audio) {
        currentlyPlayingAudio.pause();
        currentlyPlayingAudio.currentTime = 0;
        document.querySelectorAll('.btn-play').forEach(btn => {
          btn.textContent = '▶️';
          btn.classList.remove('playing');
        });
      }
      
      if (audio.paused) {
        audio.play();
        button.textContent = '⏸️';
        button.classList.add('playing');
        currentlyPlayingAudio = audio;
        
        audio.onended = () => {
          button.textContent = '▶️';
          button.classList.remove('playing');
          currentlyPlayingAudio = null;
        };
      } else {
        audio.pause();
        audio.currentTime = 0;
        button.textContent = '▶️';
        button.classList.remove('playing');
        currentlyPlayingAudio = null;
      }
    }
    
    function moveSongUp(index) {
      if (index === 0) return;
      const temp = selectedSongs[index];
      selectedSongs[index] = selectedSongs[index - 1];
      selectedSongs[index - 1] = temp;
      renderSongList();
      updateSongRangeSliders();
      calculateVideoDuration();
    }
    
    function moveSongDown(index) {
      if (index === selectedSongs.length - 1) return;
      const temp = selectedSongs[index];
      selectedSongs[index] = selectedSongs[index + 1];
      selectedSongs[index + 1] = temp;
      renderSongList();
      updateSongRangeSliders();
      calculateVideoDuration();
    }
    
    function removeSong(index) {
      if (!confirm(`Remove "${selectedSongs[index].displayName}"?`)) return;
      selectedSongs.splice(index, 1);
      renderLibrary();
      renderSongList();
      updateSongCount();
      updateSongRangeSliders();
      calculateVideoDuration();
      validateForm();
    }
    
    function updateSongCount() {
      const display = document.getElementById('songCountDisplay');
      const uploadSection = document.getElementById('uploadSection');
      const uploadLabel = document.getElementById('uploadLabel');
      
      display.textContent = `${selectedSongs.length} songs selected`;
      
      if (selectedSongs.length >= MAX_SONGS) {
        uploadSection.classList.add('max-reached');
        uploadLabel.classList.add('disabled');
      } else {
        uploadSection.classList.remove('max-reached');
        uploadLabel.classList.remove('disabled');
      }
    }

    function calculateVideoDuration() {
      // Function disabled - slideCount input was removed
      return;
  
      const slideCountInput = document.getElementById('slideCount');
      const slideCount = parseInt(slideCountInput.value);
      const timingMode = document.querySelector('input[name="timingMode"]:checked')?.value;
  
      const displayDiv = document.getElementById('durationDisplay');
      const valueDiv = document.getElementById('durationValue');
      const detailsDiv = document.getElementById('durationDetails');
  
      // Hide if no slide count
      if (!slideCount || slideCount < 2) {
        displayDiv.style.display = 'none';
        return;
      }
  
      let totalSeconds = 0;
      let detailsText = '';
  
      if (timingMode === 'perSlide') {
        const perSlideSec = parseInt(document.getElementById('perSlideSec').value) || 5;
        // (slideCount - 2) normal slides + 2 slides at 2x duration
        totalSeconds = (slideCount - 2) * perSlideSec + (2 * perSlideSec * 2);
  
        // Format time for display in the message
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        const timeDisplay = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  
        detailsText = `Video will be ${timeDisplay} long with ${slideCount} slides at ${perSlideSec} seconds per slide (beginning and end slide at ${perSlideSec * 2}s)`;
  
      } else if (timingMode === 'fixedRuntime') {
        totalSeconds = parseInt(document.getElementById('fixedRuntimeSec').value) || 350;
        const avgPerSlide = Math.round(totalSeconds / slideCount);
  
        // Format time for display in the message
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        const timeDisplay = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  
        detailsText = `Video will be ${timeDisplay} long across ${slideCount} slides at approximately ${avgPerSlide} seconds per slide`;
  
      } else if (timingMode === 'fitToSongs') {
        // Sum all song durations
        totalSeconds = selectedSongs.reduce((sum, song) => {
          return sum + (song.duration || 0);
      }, 0);
  
      if (totalSeconds === 0) {
        detailsText = 'Add songs to calculate duration';
        displayDiv.style.display = 'none';
        return;
      }
  
      const avgPerSlide = Math.round(totalSeconds / slideCount);
      const songWord = selectedSongs.length === 1 ? 'song' : 'songs';
  
      // Format time for display in the message
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      const timeDisplay = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  
      detailsText = `Video will be ${timeDisplay} long based on ${selectedSongs.length} selected ${songWord} at ${avgPerSlide} seconds per slide (beginning and end slide at ${avgPerSlide * 2}s)`;
    }
  
      // Format as MM:SS
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      const formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  
      valueDiv.textContent = formattedTime;
      detailsDiv.textContent = detailsText;
      displayDiv.style.display = 'block';
    }
    
    function handleCustomSongUpload(e) {
      const files = Array.from(e.target.files);
  
      files.forEach(file => {
        if (selectedSongs.length >= MAX_SONGS) {
          showToast(`Maximum ${MAX_SONGS} songs reached`, 'error');
          return;
        }
    
        if (!file.type.includes('audio/mpeg') && !file.name.endsWith('.mp3')) {
          showToast(`${file.name} is not an MP3 file`, 'error');
          return;
        }
    
        const localUrl = URL.createObjectURL(file);
    
        // Create audio element to get duration
        const audio = new Audio(localUrl);
        audio.addEventListener('loadedmetadata', () => {
          const duration = Math.round(audio.duration);
      
          // Find the song in selectedSongs and update its duration
          const song = selectedSongs.find(s => s.url === localUrl);
          if (song) {
            song.duration = duration;
            console.log(`[DURATION] ${file.name}: ${duration}s`);
            calculateVideoDuration(); // Recalculate after getting duration
          }
        });
    
        selectedSongs.push({
          id: `custom-${Date.now()}-${Math.random()}`,
          name: file.name,
          displayName: file.name,
          url: localUrl,
          isLibrary: false,
          file: file,
          duration: null // Will be set when metadata loads
        });
      });
  
      renderSongList();
      updateSongCount();
      updateSongRangeSliders();
      calculateVideoDuration();
      validateForm();
  
      e.target.value = '';
    }
    // Genre selector change event listener
    document.getElementById('genreSelect').addEventListener('change', () => {
      renderLibrary();
    });

    // Update transition preview when selection changes
    document.getElementById('visualPackage').addEventListener('change', (e) => {
      const selectedValue = e.target.value;
      const videoSource = document.getElementById('transitionPreviewSource');
      const video = document.getElementById('transitionPreview');
      
      if (selectedValue && TRANSITION_VIDEOS[selectedValue]) {
        videoSource.src = TRANSITION_VIDEOS[selectedValue];
        video.load();
      }
    });
    
    function validateForm() {
      const slideshowVersion = document.querySelector('input[name="slideshowVersion"]:checked').value;
      const submitBtn = document.getElementById('submitBtn');
      const validationMsg = document.getElementById('validationMessage');
      
      let issues = [];
      
      // Check slideshow
      if (slideshowVersion === 'copy') {
        const newUrl = document.getElementById('newGoogleSlidesUrl').value;
        if (!newUrl || !newUrl.includes('docs.google.com/presentation')) {
          issues.push('Enter a valid Google Slides URL');
        }
      } else if (slideshowVersion === 'download') {
        const pptxFile = document.getElementById('pptxFile').files[0];
        const pptxUrl = document.getElementById('pptxUrl').value;
        if (!pptxFile && !pptxUrl) {
          issues.push('Upload a PowerPoint file or provide a URL');
        }
      }
      
      // Check songs
      if (selectedSongs.length === 0) {
        issues.push('Select at least one song');
      }

      // Check song ranges if Specify Placement is selected
      const musicDistribution = document.getElementById('musicDistribution').value;
      if (musicDistribution === 'specifyPlacement' && selectedSongs.length > 0) {
        let rangesValid = true;
        for (let i = 0; i < selectedSongs.length; i++) {
          const startInput = document.getElementById(`songRange${i}Start`);
          const endInput = document.getElementById(`songRange${i}End`);

          if (!startInput || !endInput || !startInput.value || !endInput.value) {
            rangesValid = false;
            break;
          }

          const start = parseInt(startInput.value);
          const end = parseInt(endInput.value);

          if (start < 1 || end < 1 || start > end) {
            rangesValid = false;
            break;
          }
        }
        if (!rangesValid) {
          issues.push('Complete all song slide ranges (start must be ≤ end)');
        }
      }
      
      // Update UI
      if (issues.length > 0) {
        submitBtn.disabled = true;
        validationMsg.innerHTML = '⚠️ ' + issues.join(' • ');
        validationMsg.style.display = 'block';
      } else {
        submitBtn.disabled = false;
        validationMsg.style.display = 'none';
      }
    }

    // Handle music distribution change
    function handleMusicDistributionChange(value) {
      const container = document.getElementById('songRangesContainer');
      
      if (value === 'specifyPlacement') {
        container.style.display = 'block';
        setupSongRangeSliders();
      } else {
        container.style.display = 'none';
      }
    }
    
    // Setup song range sliders
    function setupSongRangeSliders() {
      const container = document.getElementById('songRangesList');

    if (selectedSongs.length === 0) {
      container.innerHTML = '<div style="color: #999; font-style: italic;">No songs available. Add songs first.</div>';
      return;
    }

    let html = '';
    let exampleStart = 1;
    let exampleEnd = 19;
  
    selectedSongs.forEach((song, index) => {
      const audioId = `audio-range-${song.id}`;
      const playButton = song.url ? `<button class="btn-small btn-play" onclick="togglePlay('${audioId}', this)" style="margin-left: 8px;">▶️ Play Song</button>` : '';

      // Auto-populate start value: first song starts at 1, others start at previous end + 1
      const startValue = index === 0 ? '1' : '';
    
      // Calculate example placeholders
      const startPlaceholder = `Example: ${exampleStart}`;
      const endPlaceholder = `Example: ${exampleEnd}`;

      html += `
        <div class="song-range-item">
        <div class="song-range-header">
          🎵 ${song.displayName}
          ${playButton}
          ${song.url ? `<audio id="${audioId}" src="${song.url}" preload="none"></audio>` : ''}
        </div>
        <div class="slide-inputs">
          <div class="slide-input-group">
            <label>Start Slide</label>
            <input type="number" 
                   id="songRange${index}Start" 
                   class="song-range-input"
                   data-song-index="${index}"
                   data-type="start"
                   min="1" 
                   max="250" 
                   value="${startValue}"
                   placeholder="${startPlaceholder}">
          </div>
          <div class="slide-input-group">
            <label>End Slide</label>
            <input type="number" 
                   id="songRange${index}End" 
                   class="song-range-input"
                  data-song-index="${index}"
                   data-type="end"
                   min="1" 
                   max="250" 
                  placeholder="${endPlaceholder}">
         </div>
        </div>
      </div>
    `;
  
    // Update examples for next song
    exampleStart = exampleEnd + 1;
    exampleEnd = exampleStart + 17; // Each song spans about 18 slides in examples
    });
  
    container.innerHTML = html;
  
    // Add event listeners to all range inputs
    document.querySelectorAll('.song-range-input').forEach(input => {
      input.addEventListener('input', handleSongRangeChange);
    });
  }
    
    // Handle song range input changes
    function handleSongRangeChange(e) {
      const changedIndex = parseInt(e.target.dataset.songIndex);
      const changedType = e.target.dataset.type;
  
      // If an "End Slide" changed, update the next song's start slide
      if (changedType === 'end' && changedIndex < selectedSongs.length - 1) {
        const endValue = parseInt(e.target.value);
        if (!isNaN(endValue)) {
          const nextStartInput = document.getElementById(`songRange${changedIndex + 1}Start`);
          if (nextStartInput) {
            nextStartInput.value = endValue + 1;
          }
        }
      }
  
      // Rebuild songRanges array
      songRanges = [];

      selectedSongs.forEach((song, index) => {
        const startInput = document.getElementById(`songRange${index}Start`);
        const endInput = document.getElementById(`songRange${index}End`);

        if (startInput && endInput) {
          const startVal = parseInt(startInput.value);
          const endVal = parseInt(endInput.value);
  
          if (!isNaN(startVal) && !isNaN(endVal)) {
            let songIdentifier;
    
            if (song.isLibrary) {
              // Library: use actual filename
              songIdentifier = song.name;
            } else {
              // Custom: use position-based name (matches backend upload order)
              songIdentifier = `song${index + 1}.mp3`;
            }
    
            songRanges.push({
              song: songIdentifier,
              startSlide: startVal,
              endSlide: endVal
            });
         }
      }
    });

    console.log('[SONG RANGES]', songRanges);
    validateForm();
  }
    // Update song range sliders when song count changes
    function updateSongRangeSliders() {
      const musicDist = document.getElementById('musicDistribution').value;
      if (musicDist === 'specifyPlacement') {
        setupSongRangeSliders();
      }
    }

    async function calculateVideo() {
      try {
        showLoading(true, 'Reviewing Video Plan...', 'Counting slides and estimating duration');
        
        // STEP 1: Determine presentation type and source
        const slideshowVersion = document.querySelector('input[name="slideshowVersion"]:checked').value;
        let presentationType = null;
        let presentationSource = null;
        
        if (slideshowVersion === 'original') {
          if (slideshowUrl.includes('docs.google.com/presentation')) {
            presentationType = 'google_slides';
            presentationSource = slideshowUrl;
          } else if (slideshowUrl.includes('sharepoint.com') || slideshowUrl.includes('onedrive.live.com') || slideshowUrl.includes('1drv.ms')) {
            presentationType = 'powerpoint_url';
            presentationSource = slideshowUrl;
          } else {
            throw new Error('Could not determine presentation type from original URL');
          }
        } else if (slideshowVersion === 'copy') {
          const newUrl = document.getElementById('newGoogleSlidesUrl').value;
          presentationType = 'google_slides';
          presentationSource = newUrl;
        } else if (slideshowVersion === 'download') {
          const pptxFile = document.getElementById('pptxFile').files[0];
          const pptxUrl = document.getElementById('pptxUrl').value;
          
          if (pptxFile) {
            // Upload file to S3 first (and cache for finalSubmit)
            showToast('Uploading presentation...', 'success');
            const uploadedUrl = await uploadFileToS3(pptxFile, 'presentation');
            cachedPresentationUrl = uploadedUrl;
            presentationType = 'powerpoint_file';
            presentationSource = uploadedUrl;
          } else if (pptxUrl) {
            presentationType = 'powerpoint_url';
            presentationSource = pptxUrl;
          }
        }
        
        if (!presentationType || !presentationSource) {
          throw new Error('Could not determine presentation type');
        }
        
        // STEP 2: Call calculate API to get slide count
        showToast('Counting slides...', 'success');
        const calculatePayload = {
          presentationType: presentationType,
          presentationSource: presentationSource
        };
        
        console.log('[CALCULATE] Calling API:', `${CALCULATE_API}/${uid}/calculate`);
        console.log('[CALCULATE] Payload:', calculatePayload);
        
        const calculateResponse = await fetch(`${CALCULATE_API}/${uid}/calculate`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(calculatePayload)
        });
        
        if (!calculateResponse.ok) {
          const errorData = await calculateResponse.json().catch(() => ({}));
          throw new Error(errorData.error || `Failed to calculate: HTTP ${calculateResponse.status}`);
        }
        
        const calculateResult = await calculateResponse.json();
        console.log('[CALCULATE] Result:', calculateResult);
        
        const slideCount = calculateResult.slideCount;
        
        // STEP 3: Calculate duration based on timing mode and songs
        const timingMode = document.querySelector('input[name="timingMode"]:checked').value;
        let estimatedSeconds = 0;
        let durationText = '';
        let summaryText = '';
        
        // Calculate total music duration
        let totalMusicSeconds = 0;
        for (const song of selectedSongs) {
          let songSeconds = 0;
  
          if (typeof song.duration === 'string') {
            // Library song: convert "4:32" to seconds
            const parts = song.duration.split(':');
            songSeconds = parseInt(parts[0]) * 60 + parseInt(parts[1]);
          } else if (typeof song.duration === 'number') {
            // Custom uploaded song: already in seconds
            songSeconds = song.duration;
          } else {
            // No duration yet (custom song still loading): default 3 min
            songSeconds = 180;
          }
  
          totalMusicSeconds += songSeconds;
        }
        
        if (timingMode === 'fixedRuntime') {
          estimatedSeconds = getFixedRuntimeSeconds();
          const minutes = Math.floor(estimatedSeconds / 60);
          const seconds = estimatedSeconds % 60;
          durationText = `${minutes}:${seconds.toString().padStart(2, '0')}`;
          
          // Calculate time range (± 9 seconds)
          const minSeconds = Math.max(0, estimatedSeconds - 9);
          const maxSeconds = estimatedSeconds + 9;
          const minMinutes = Math.floor(minSeconds / 60);
          const minSecs = minSeconds % 60;
          const maxMinutes = Math.floor(maxSeconds / 60);
          const maxSecs = maxSeconds % 60;
          const minTime = `${minMinutes}:${minSecs.toString().padStart(2, '0')}`;
          const maxTime = `${maxMinutes}:${maxSecs.toString().padStart(2, '0')}`;
          
          const perSlide = (estimatedSeconds / slideCount).toFixed(1);
          
          // Get visual package and music distribution
          const visualPackage = document.getElementById('visualPackage').value;
          const visualPackageNames = {
            'simple-fade-wipe': 'Simple Fade & Wipe',
            'pages-of-life': 'Pages of Life',
            'floating-frames': 'Floating Frames',
            'zoom-through': 'Zoom Through',
            'blinds-combs-bars': 'Blinds, Combs & Bars'
          };
          const visualName = visualPackageNames[visualPackage] || visualPackage;
          
          const musicDistribution = document.getElementById('musicDistribution').value;
          const distributionNames = {
            'evenlyDistributed': 'Evenly Distributed',
            'specifyPlacement': 'Specify Placement'
          };
          const distributionName = distributionNames[musicDistribution] || 'Evenly Distributed';
          
          const songCount = selectedSongs.length;
          const songText = songCount === 1 ? '1 song' : `${songCount} songs`;
          
          summaryText = `The video between ${minTime} and ${maxTime} uses Fixed Runtime mode with ${slideCount} slides (approximately ${perSlide} seconds per slide), ${visualName} transitions, and ${songText} (${distributionName}).`;
          
        } else if (timingMode === 'perSlide') {
          const perSlide = parseInt(document.getElementById('perSlideSec').value) || 5;
          estimatedSeconds = (slideCount * perSlide) + (perSlide * 2);
          const minutes = Math.floor(estimatedSeconds / 60);
          const seconds = estimatedSeconds % 60;
          durationText = `${minutes}:${seconds.toString().padStart(2, '0')}`;
          
          // Calculate time range (± 9 seconds)
          const minSeconds = Math.max(0, estimatedSeconds - 9);
          const maxSeconds = estimatedSeconds + 9;
          const minMinutes = Math.floor(minSeconds / 60);
          const minSecs = minSeconds % 60;
          const maxMinutes = Math.floor(maxSeconds / 60);
          const maxSecs = maxSeconds % 60;
          const minTime = `${minMinutes}:${minSecs.toString().padStart(2, '0')}`;
          const maxTime = `${maxMinutes}:${maxSecs.toString().padStart(2, '0')}`;
          
          // Get visual package and music distribution
          const visualPackage = document.getElementById('visualPackage').value;
          const visualPackageNames = {
            'simple-fade-wipe': 'Simple Fade & Wipe',
            'pages-of-life': 'Pages of Life',
            'floating-frames': 'Floating Frames',
            'zoom-through': 'Zoom Through',
            'blinds-combs-bars': 'Blinds, Combs & Bars'
          };
          const visualName = visualPackageNames[visualPackage] || visualPackage;
          
          const musicDistribution = document.getElementById('musicDistribution').value;
          const distributionNames = {
            'evenlyDistributed': 'Evenly Distributed',
            'specifyPlacement': 'Specify Placement'
          };
          const distributionName = distributionNames[musicDistribution] || 'Evenly Distributed';
          
          const songCount = selectedSongs.length;
          const songText = songCount === 1 ? '1 song' : `${songCount} songs`;
          
          summaryText = `The video between ${minTime} and ${maxTime} uses Per Slide Duration mode with ${slideCount} slides at ${perSlide} seconds per slide, ${visualName} transitions, and ${songText} (${distributionName}).`;
       
        } else if (timingMode === 'fitToSongs') {
          estimatedSeconds = totalMusicSeconds;
          const minutes = Math.floor(estimatedSeconds / 60);
          const seconds = estimatedSeconds % 60;
          durationText = `${minutes}:${seconds.toString().padStart(2, '0')}`;
          
          // Calculate time range (± 9 seconds)
          const minSeconds = Math.max(0, estimatedSeconds - 9);
          const maxSeconds = estimatedSeconds + 9;
          const minMinutes = Math.floor(minSeconds / 60);
          const minSecs = minSeconds % 60;
          const maxMinutes = Math.floor(maxSeconds / 60);
          const maxSecs = maxSeconds % 60;
          const minTime = `${minMinutes}:${minSecs.toString().padStart(2, '0')}`;
          const maxTime = `${maxMinutes}:${maxSecs.toString().padStart(2, '0')}`;
          
          const perSlide = (estimatedSeconds / slideCount).toFixed(1);
          
          // Get visual package
          const visualPackage = document.getElementById('visualPackage').value;
          const visualPackageNames = {
            'simple-fade-wipe': 'Simple Fade & Wipe',
            'pages-of-life': 'Pages of Life',
            'floating-frames': 'Floating Frames',
            'zoom-through': 'Zoom Through',
            'blinds-combs-bars': 'Blinds, Combs & Bars'
          };
          const visualName = visualPackageNames[visualPackage] || visualPackage;
          
          const songCount = selectedSongs.length;
          const songText = songCount === 1 ? '1 song' : `${songCount} songs`;
          
          summaryText = `The video between ${minTime} and ${maxTime} uses Fit to Music Length mode with ${slideCount} slides (approximately ${perSlide} seconds per slide), ${visualName} transitions, and ${songText} (automatically distributed to match music length).`;
        }
        
        showLoading(false);
        
        // STEP 4: Show modal with results
        showCalculationModal(slideCount, durationText, summaryText);
        
      } catch (error) {
        console.error('[CALCULATE ERROR]', error);
        showLoading(false);
        showToast('Failed to calculate: ' + error.message, 'error');
      }
    }
    
    async function finalSubmit() {
      try {
        closeCalculationModal();
        showLoading(true);
        
        // STEP 1: Determine presentation type and source
        const slideshowVersion = document.querySelector('input[name="slideshowVersion"]:checked').value;
        let presentationType = null;
        let presentationSource = null;
        
        if (slideshowVersion === 'original') {
          if (slideshowUrl.includes('docs.google.com/presentation')) {
            presentationType = 'google_slides';
            presentationSource = slideshowUrl;
          } else if (slideshowUrl.includes('sharepoint.com') || slideshowUrl.includes('onedrive.live.com') || slideshowUrl.includes('1drv.ms')) {
            presentationType = 'powerpoint_url';
            presentationSource = slideshowUrl;
          } else {
            throw new Error('Could not determine presentation type from original URL');
          }
        } else if (slideshowVersion === 'copy') {
          const newUrl = document.getElementById('newGoogleSlidesUrl').value;
          presentationType = 'google_slides';
          presentationSource = newUrl;
        } else if (slideshowVersion === 'download') {
          const pptxFile = document.getElementById('pptxFile').files[0];
          const pptxUrl = document.getElementById('pptxUrl').value;
          
          if (pptxFile) {
            // Use cached URL from calculateVideo() if available
            if (cachedPresentationUrl) {
              presentationType = 'powerpoint_file';
              presentationSource = cachedPresentationUrl;
            } else {
              showToast('Uploading presentation...', 'success');
              const uploadedUrl = await uploadFileToS3(pptxFile, 'presentation');
              presentationType = 'powerpoint_file';
              presentationSource = uploadedUrl;
            }
          } else if (pptxUrl) {
            presentationType = 'powerpoint_url';
            presentationSource = pptxUrl;
          }
        }
        
        if (!presentationType || !presentationSource) {
          throw new Error('Could not determine presentation type');
        }
        
        // STEP 2: Upload custom songs to S3 and collect all song URLs
        showToast('Uploading songs...', 'success');
        const songs = [];
        const songFilenames = [];  // ✅ ADD THIS

        for (let i = 0; i < selectedSongs.length; i++) {
          const song = selectedSongs[i];
  
          if (song.isLibrary) {
            // Library song - use direct URL
            songs.push(song.url);
            songFilenames.push(song.name);  // ✅ ADD THIS (original library filename)
          } else if (song.file) {
            // Custom song - upload to S3
            try {
              const uploadedUrl = await uploadFileToS3(song.file, 'song', i + 1);
              if (uploadedUrl) {
                songs.push(uploadedUrl);
                songFilenames.push(song.file.name);  // ✅ ADD THIS (original uploaded filename)
              } else {
                throw new Error(`Failed to upload ${song.name} - no URL returned`);
              }
           } catch (error) {
             console.error(`[UPLOAD ERROR] Failed to upload song ${song.name}:`, error);
             showToast(`Failed to upload ${song.name}: ${error.message}`, 'error');
             throw new Error(`Song upload failed: ${song.name}`);
           }
        }
     }

     if (songs.length === 0) {
       throw new Error('No songs to process');
     }

     console.log(`[SONGS] Successfully prepared ${songs.length} songs`);
     console.log('[SONGS] URLs:', songs);
     console.log('[SONGS] Original filenames:', songFilenames);  // ✅ ADD THIS
        
        // STEP 3: Build settings
        const timingMode = document.querySelector('input[name="timingMode"]:checked').value;
        const settings = {
          jobId: uid,
          customerEmail: email,
          timingMode: timingMode,
          visualPackage: document.getElementById('visualPackage').value,
          audioCount: songs.length,
          minPerSlideSec: 2,
          maxPerSlideSec: 12,
          targetLufs: -16,
          fadeInSec: 2,
          fadeOutSec: 2,
          musicDistribution: document.getElementById('musicDistribution').value,
          audioMatchPolicy: 'fitTo',
          fullName: fullName
        };
        
        if (timingMode === 'fixedRuntime') {
          settings.fixedRuntimeSec = getFixedRuntimeSeconds();
        } else if (timingMode === 'perSlide') {
          settings.perSlideSec = parseInt(document.getElementById('perSlideSec').value) || 5;
        }

        // ADD SONG RANGES IF SPECIFY PLACEMENT IS SELECTED
        if (settings.musicDistribution === 'specifyPlacement' && songRanges.length > 0) {
          settings.songRanges = songRanges;
          console.log('[SUBMIT] Including songRanges:', songRanges);
        }
        
        // STEP 4: Build final payload
        const payload = {
          jobId: uid,
          customerFirstName: customerFirstName,
          customerLastName: '', 
          presentationType: presentationType,
          presentationSource: presentationSource,
          songs: songs,
          songFilenames: songFilenames,
          settings: settings
        };
        
        console.log('[SUBMIT] Payload:', JSON.stringify(payload, null, 2));
        
        // STEP 5: Submit to API
        showToast('Creating video...', 'success');
        const response = await fetch(API_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });
        
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.error || errorData.message || `HTTP ${response.status}`);
        }
        
        const result = await response.json();
        console.log('[SUBMIT] Success:', result);
        
        showLoading(false);

        // Redirect to thank you page
        window.location.href = `thank-you.html?jobId=${encodeURIComponent(uid)}&email=${encodeURIComponent(email)}&name=${encodeURIComponent(customerFirstName)}`;
        
      } catch (error) {
        console.error('[SUBMIT ERROR]', error);
        showLoading(false);
        showToast('Failed to submit: ' + error.message, 'error');
      }
    }
    
    async function uploadFileToS3(file, fileType, fileNumber = null) {
      try {
        console.log(`[UPLOAD] Starting upload for ${file.name} (${fileType})`);
        
        // Get presigned URL from API
        const payload = {
          jobId: uid,
          fileType: fileType,
          fileExtension: file.name.split('.').pop()
        };
        
        if (fileNumber !== null) {
          payload.fileNumber = fileNumber;
        }
        
        console.log(`[UPLOAD] Requesting presigned URL with payload:`, payload);
        
        const urlResponse = await fetch(S3_UPLOAD_API, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        
        if (!urlResponse.ok) {
          const errorText = await urlResponse.text();
          console.error(`[UPLOAD ERROR] Failed to get presigned URL: ${urlResponse.status} - ${errorText}`);
          throw new Error(`Failed to get upload URL: ${urlResponse.status} - ${errorText}`);
        }
        
        const responseData = await urlResponse.json();
        console.log(`[UPLOAD] Presigned URL response:`, responseData);
        
        const uploadUrl = responseData.uploadUrl;
        let s3Url = responseData.s3Url || responseData.s3Key;
        
        if (!uploadUrl) {
          throw new Error('No uploadUrl in API response');
        }
        
        console.log(`[UPLOAD] Got presigned URL, uploading to S3...`);
        
        // ✅ FIXED CODE
        const uploadResponse = await fetch(uploadUrl, {
          method: 'PUT',
          headers: {
            'Content-Type': file.type
            // ACL header removed - files inherit bucket permissions
          },
          body: file
        });
        
        if (!uploadResponse.ok) {
          console.error(`[UPLOAD ERROR] S3 upload failed: ${uploadResponse.status}`);
          throw new Error(`S3 upload failed: ${uploadResponse.status}`);
        }
        
        // Convert S3 key to full URL if needed
        if (s3Url && !s3Url.startsWith('http')) {
          s3Url = `https://order-by-age-uploads.s3.us-east-2.amazonaws.com/${s3Url}`;
          console.log(`[UPLOAD] Converted S3 key to full URL: ${s3Url}`);
        }
        
        console.log(`[UPLOAD] Successfully uploaded ${file.name} to S3`);
        console.log(`[UPLOAD] S3 URL: ${s3Url}`);
        
        return s3Url;
      } catch (error) {
        console.error(`[UPLOAD ERROR] Failed to upload ${file.name}:`, error);
        throw error;
      }
    }
    
    function showLoading(show, message = 'Creating Your Video...', subtext = 'Please wait, this may take a few moments') {
      const overlay = document.getElementById('loadingOverlay');
  
      if (show) {
        document.querySelector('.loading-text').textContent = message;
        document.querySelector('.loading-subtext').textContent = subtext;
        overlay.classList.add('show');
      } else {
        overlay.classList.remove('show');
      }
    }
    
    function showToast(message, type = 'success') {
      const toast = document.getElementById('toast');
      toast.textContent = message;
      toast.className = `toast ${type} show`;
      
      setTimeout(() => {
        toast.classList.remove('show');
      }, 4000);
    }

    function showCalculationModal(slideCount, duration, summary) {
      // Parse the duration (format: "M:SS")
      const parts = duration.split(':');
      const minutes = parseInt(parts[0]);
      const seconds = parseInt(parts[1]);
      const totalSeconds = (minutes * 60) + seconds;
      
      // Calculate range (± 9 seconds)
      const minSeconds = Math.max(0, totalSeconds - 9);
      const maxSeconds = totalSeconds + 9;
      
      // Convert back to M:SS format
      const minMinutes = Math.floor(minSeconds / 60);
      const minSecs = minSeconds % 60;
      const maxMinutes = Math.floor(maxSeconds / 60);
      const maxSecs = maxSeconds % 60;
      
      const minTime = `${minMinutes}:${minSecs.toString().padStart(2, '0')}`;
      const maxTime = `${maxMinutes}:${maxSecs.toString().padStart(2, '0')}`;
      
      const durationRange = `${minTime} - ${maxTime}`;
      
      document.getElementById('modalSlideCount').textContent = slideCount;
      document.getElementById('modalDuration').textContent = durationRange;
      document.getElementById('modalSummary').textContent = summary;
      document.getElementById('calculationModal').classList.add('show');
    }
    
    function closeCalculationModal() {
      document.getElementById('calculationModal').classList.remove('show');
    }
    
    let pendingMusicUpload = false;

    function showMusicTermsModal(e) {
      e.preventDefault();
      document.getElementById('musicTermsModal').classList.add('show');
    }

    function cancelMusicUpload() {
      document.getElementById('musicTermsModal').classList.remove('show');
      document.getElementById('customSongUpload').value = ''; // Clear file input
    }

    function acceptMusicTerms() {
      document.getElementById('musicTermsModal').classList.remove('show');
      // Trigger the file input
      document.getElementById('customSongUpload').click();
    }

    function refreshPreview() {
      const iframe = document.getElementById('previewIframe');
      const currentSrc = iframe.src;
      
      // Only refresh if there's actually something in the iframe
      if (currentSrc) {
        showToast('Refreshing preview...', 'success');
        // Simply reload the same URL - forces fresh fetch
        iframe.src = currentSrc;
      }
    }

