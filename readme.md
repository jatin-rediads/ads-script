
# Rediads GPT Ad Tags

We have 3 different js files for ad tags.

        1. Normal GPT Ads
        2. Prebid Integration with GPT tags
        3. Amazon + GPT Ads



## Head Tag

```http
  PATH (GAM) Basic                      - /code/global/basic.js
  PATH (GAM + Prebid) Rookie            - /code/global/rookie.js
  PATH (GAM + Prebid + Amazon) Ultimate - /code/global/ultimate.js
```

```html
<script>
        (function () {

            // Load APS library
            !function (a9, a, p, s, t, A, g) {
                if (a[a9]) return;

                function q(c, r) {
                    a[a9]._Q.push([c, r])
                }

                a[a9] = {
                    init: function () {
                        q("i", arguments)
                    }, fetchBids: function () {
                        q("f", arguments)
                    }, setDisplayBids: function () {
                    }, targetingKeys: function () {
                        return []
                    }, _Q: []
                };
                A = p.createElement(s);
                A.async = !0;
                A.src = t;
                g = p.getElementsByTagName(s)[0];
                g.parentNode.insertBefore(A, g)
            }("apstag", window, document, "script", "//c.amazon-adsystem.com/aax2/apstag.js");

        })();
    </script>
    <script src="https://rediads.com/code/global/prebid.js"></script>
    <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
    <script src="https://rediads.com/code/global/ads.js" defer></script>
```

## Body Tags Parameter

#### All items

```http
  PATH /code/js
```

#### NORMAL GPT AD TAG

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `data-adslot` | `string` | **Required**. GPT AD Path "/21742552194/NueGamers/Leaderboard" |
| `data-size-desktop` | `string` | **Required**. GPT AD Size # "[[300,250]]"|
| `data-size-mobile` | `string` | **Required**. GPT AD Size # "[[300,250]]"|
| `data-ad-refresh=true` | `boolean` | true / false |

```html
  <div 
  data-adslot="/21742552194/NueGamers/Leaderboard" 
  data-size-desktop="[[728,90]]" 
  data-size-mobile="[[320,50]]"
  data-ad-refresh=true>
  </div>
```

#### Prebid With Gpt Ad Tag

| Parameter              | Type      | Description                                                    |
|:-----------------------|:----------|:---------------------------------------------------------------|
| `data-adslot`          | `string`  | **Required**. GPT AD Path "/21742552194/NueGamers/Leaderboard" |
| `data-size`            | `string`  | **Required**. GPT AD Size # "[[300,250]]"                      |
| `data-size-mobile`     | `string`  | **Required**. GPT AD Size # "[[300,250]]"                      |
| `data-ad-refresh=true` | `boolean` | true / false                                                   |

```html
  <div 
  data-adslot="/21742552194/NueGamers/Leaderboard" 
  data-size-desktop="[[728,90]]" 
  data-size-mobile="[[320,50]]"
  data-ad-refresh=true>
  </div>
```


#### Amazon + Prebid With Gpt Ad Tag

| Parameter              | Type      | Description                                                    |
|:-----------------------|:----------|:---------------------------------------------------------------|
| `data-adslot`          | `string`  | **Required**. GPT AD Path "/21742552194/NueGamers/Leaderboard" |
| `data-size`            | `string`  | **Required**. GPT AD Size # "[[300,250]]"                      |
| `data-size-mobile`     | `string`  | **Required**. GPT AD Size # "[[300,250]]"                      |
| `data-ad-refresh=true` | `boolean` | true / false                                                   |

```html

    <div data-adslot="/21742552194/NueGamers/Leaderboard"
         data-size-desktop="[[728,90],[728,250]]" 
         data-size-mobile="[[250,250],[300,250],[320,480],[320,100],[320,50]]"
         data-ad-refresh=true>
    </div>

```

#### Parallax Ad Tag

| Parameter              | Type      | Description                                                    |
|:-----------------------|:----------|:---------------------------------------------------------------|
| `data-adslot`          | `string`  | **Required**. GPT AD Path "/21742552194/NueGamers/Leaderboard" |
| `data-size`            | `string`  | **Required**. GPT AD Size # "[[300,250]]"                      |
| `data-size-mobile`     | `string`  | **Required**. GPT AD Size # "[[300,250]]"                      |
| `data-ad-refresh=true` | `boolean` | true / false                                                   |

```html  
<div style="height:340px; text-align: center;  " class="parallax_container">  
  <div class="parallax_container_one">  
    <div class="parallax_container_two" style="top: 20px;">  
      <div  
        data-adslot="/21742552194/NueGamers/Leaderboard"  
        data-size-desktop="[[300,1050]]"  
        data-size-mobile="[[300,1050]]"  
        data-ad-refresh=true  
      >  
      </div>  
    </div>  
  </div>  
</div>  
```

#### In-Page Sticky Ad Tag

| Parameter              | Type      | Description                                                    |
|:-----------------------|:----------|:---------------------------------------------------------------|
| `data-adslot`          | `string`  | **Required**. GPT AD Path "/21742552194/NueGamers/Leaderboard" |
| `data-size`            | `string`  | **Required**. GPT AD Size # "[[300,250]]"                      |
| `data-size-mobile`     | `string`  | **Required**. GPT AD Size # "[[300,250]]"                      |
| `data-ad-refresh=true` | `boolean` | true / false                                                   |

```html  
<div class="paisa-banner">  
	 <div data-adslot="/21742552194/NueGamers/Leaderboard" 
		  data-size-desktop="[[728,90],[728,250]]"         
		  data-size-mobile="[[250,250],[300,250],[320,480],[320,100],[320,50]]"  
		  data-ad-refresh=true>
	  </div>
</div> 
```




#### Two Ad Side By Side Tag

| Parameter              | Type      | Description                                                    |
|:-----------------------|:----------|:---------------------------------------------------------------|
| `data-adslot`          | `string`  | **Required**. GPT AD Path "/21742552194/NueGamers/Leaderboard" |
| `data-size`            | `string`  | **Required**. GPT AD Size # "[[300,250]]"                      |
| `data-size-mobile`     | `string`  | **Required**. GPT AD Size # "[[300,250]]"                      |
| `data-ad-refresh=true` | `boolean` | true / false                                                   |

```html  
<div class="Rediads_flex_adcontainer">
    <div class="Rediads_Ad_Card_MTF">
        <div class="Rediads_Ad_Lable">advertisement</div>
        <div class="Redias_center" data-adslot="/21742552194/NueGamers/MTF_1"
             data-size-desktop="[[300,250]]"
             data-size-mobile="[[300,250]]"
             data-ad-refresh=true>
        </div>
    </div>

    <div class="Rediads_Ad_Card_MTF_A">
        <div class="Rediads_Ad_Lable">advertisement</div>
        <div class="Redias_center" data-adslot="/21742552194/NueGamers/MTF_1"
             data-size-desktop="[[300,250]]"
             data-size-mobile="[[320,50]]"
             data-ad-refresh=true>
        </div>
    </div>
</div>
```