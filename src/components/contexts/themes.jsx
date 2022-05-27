export const themes = {
    light: {
        body: {
            bgColor: '#00b3ff'
        },

        pokedex: {
            bgColor: '#FF3334',
            border: '#000',
            pokeball: {
                bgColor: '#FF3334',
                bgLight: '#f66363',
                shadow: "#25252597"
            },
            lantern: {
                outsideBorder: '#FF3334',
                bgColor: '#00d3d3',
                insideBorder: '#01ffff47'
            },
            pad: {
                shadow: ''
            },
            display: {
                screen: {
                    border: '#d4d4d4b9'
                },
                border: 'black',
                shadow: 'rgb(0 0 0 / 55%)'
            }
        },

        button: {
            bgColor: "#ff3334",
            border: 'black',
            shadow: '#0000008c',
            color: "#ff8686",
            buttonShowMore: {
                bgColor: 'red'
            }
        },

        pokemonList: {
            pokemonCard: {
                color:'#ffc400',
                nameShadow: 'blue'
            }

        },

        pokemonDetails: {
            bgColor: 'blue',
            color: '#ffc400',
            border: '#ffc400',
            card: {
                bgColor:'#fff',
                border: '#ffc400',
                boxShadow: '-3px 4px 5px #0000007a;'
            }
        }
    },

    
    dark: {
        body: {
            bgColor: '#464646'
        },

        pokedex: {
            bgColor: '#292929',
            border: 'silver',
            pokeball: {
                bgColor: '#ffae00',
                bgLight: '#ffae00',
                shadow: "#00000096"
            },
            lantern: {
                outsideBorder: 'silver',
                bgColor: '#00d3d3',
                insideBorder: '#01ffff47'
            },
            pad: {
                shadow: '#535353'
            },
            display: {
                screen: {
                    border: '#4d4d4db8'
                },
                border: 'silver',
                shadow: '#5353538d'
            }
        },

        button: {
            bgColor: '#000',
            border: '#aaa9a9',
            shadow: '#444444cf',
            color: '#535353',
            buttonShowMore: {
                bgColor: '#ffc400'
            }
        },

        pokemonList: {
            listContainer: {
                bgColor: '#ddd',
            },
            pokemonCard: {
                color:'black',
                nameShadow: '#ffc400'
            },
        },

        pokemonDetails: {
            bgColor: 'black',
            color: 'black',
            border: '#aaa9a9',
            card: {
                bgColor: '#ffc400',
                border: 'black',
                boxShadow: '0px 0px 8px 2px #aaa9a9;'
            }
        }
    }
}