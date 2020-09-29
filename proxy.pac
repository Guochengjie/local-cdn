
					function FindProxyForURL(url, host) {
						if (host == 'music.163.com' || host == 'interface.music.163.com' || host == 'interface3.music.163.com' || host == 'apm.music.163.com' || host == 'apm3.music.163.com') {
							return 'PROXY 185.141.27.113:8080'
						}
						return 'DIRECT'
					}
				
