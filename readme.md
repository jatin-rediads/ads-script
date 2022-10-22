
# Rediads GPT Ad Tags

We have 3 different js files for ad tags.

        1. Normal GPT Ads
        2. Prebid Integration with GPT tags
        3. Amazon + GPT Ads



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

#### Prebid with gpt ad tag

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `data-adslot` | `string` | **Required**. GPT AD Path "/21742552194/NueGamers/Leaderboard" |
| `data-size` | `string` | **Required**. GPT AD Size # "[[300,250]]"|
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


#### Amazon + Prebid with gpt ad tag

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `data-adslot` | `string` | **Required**. GPT AD Path "/21742552194/NueGamers/Leaderboard" |
| `data-size-desktop` | `string` | **Required**. GPT AD Size # "[[300,250]]"|
| `data-size-mobile` | `string` | **Required**. GPT AD Size # "[[300,250]]"|
| `data-ad-refresh=true` | `boolean` | true / false |

```html

    <div data-adslot="/21742552194/NueGamers/Leaderboard"
         data-size-desktop="[[728,90],[728,250]]" 
         data-size-mobile="[[250,250],[300,250],[320,480],[320,100],[320,50]]"
         data-ad-refresh=true>
    </div>

```

#### Parallax ad tag

| Parameter | Type     | Description                |  
| :-------- | :------- | :------------------------- |  
| `data-adslot` | `string` | **Required**. GPT AD Path "/21742552194/NueGamers/Leaderboard" |  
| `data-size-desktop` | `string` | **Required**. GPT AD Size # "[[300,250]]"|  
| `data-size-mobile` | `string` | **Required**. GPT AD Size # "[[300,250]]"|  
| `data-ad-refresh=true` | `boolean` | true / false |  

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

#### In-Page Sticky ad tag

| Parameter | Type     | Description                |  
| :-------- | :------- | :------------------------- |  
| `data-adslot` | `string` | **Required**. GPT AD Path "/21742552194/NueGamers/Leaderboard" |  
| `data-size-desktop` | `string` | **Required**. GPT AD Size # "[[300,250]]"|  
| `data-size-mobile` | `string` | **Required**. GPT AD Size # "[[300,250]]"|  
| `data-ad-refresh=true` | `boolean` | true / false |  

```html  
<div class="paisa-banner">  
	 <div data-adslot="/21742552194/NueGamers/Leaderboard" 
		  data-size-desktop="[[728,90],[728,250]]"         
		  data-size-mobile="[[250,250],[300,250],[320,480],[320,100],[320,50]]"  
		  data-ad-refresh=true>
	  </div>
</div> 
```



