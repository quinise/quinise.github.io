package main

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	router.Static("/assets", "./assets")
	router.LoadHTMLGlob("templates/*")

	// router.NoRoute(func(c *gin.Context) {
	// 	c.HTML(http.StatusNotFound, "not_found.html", gin.H{
	// 		"title": "Page not found",
	// 	})
	// })

	router.GET("/", func(c *gin.Context) {
		fmt.Println("in index")

		c.HTML(http.StatusOK, "index.html", gin.H{
			"title": "Quinise Mayes",
		})
	})

	// Listen and server on 0.0.0.0:8080
	router.Run(":8080")
}
