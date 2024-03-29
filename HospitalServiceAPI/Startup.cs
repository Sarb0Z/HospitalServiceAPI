﻿
//using Microsoft.AspNetCore.Builder;
//using Microsoft.AspNetCore.Hosting;
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.Extensions.Configuration;
//using Microsoft.Extensions.DependencyInjection;
//using Microsoft.Extensions.Hosting;
//using Microsoft.Extensions.Logging;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;
//using Newtonsoft.Json.Serialization;
//using Microsoft.AspNetCore.Authentication.JwtBearer;
//using System.Text;
//using Microsoft.IdentityModel.Tokens;
//using HospitalServiceAPI.Interfaces;
//using HospitalServiceAPI.Repositories;

//namespace HospitalServiceAPI
//{
//    public class Startup
//    {
//        public Startup(IConfiguration configuration)
//        {
//            Configuration = configuration;
//        }

//        public IConfiguration Configuration { get; }

//        // This method gets called by the runtime. Use this method to add services to the container.
//        public void ConfigureServices(IServiceCollection services)
//        {
//            //Enable Cors
//            //services.AddCors(c =>
//            //{
//            //    c.AddPolicy("AllowOrigin", options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
//            //});

//            ////Json Serializer
//            //services.AddControllersWithViews()
//            //    .AddNewtonsoftJson(options =>
//            //    options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
//            //    ).AddNewtonsoftJson(options => options.SerializerSettings.ContractResolver
//            //    = new DefaultContractResolver());

//            //services.AddControllers();

//            //services.AddAuthentication(x =>
//            //{
//            //    x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
//            //    x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
//            //}).AddJwtBearer(o =>
//            //{
//            //    var Key = Encoding.UTF8.GetBytes(Configuration["JWT:Key"]);
//            //    o.SaveToken = true;
//            //    o.TokenValidationParameters = new TokenValidationParameters
//            //    {
//            //        ValidateIssuer = false,
//            //        ValidateAudience = false,
//            //        ValidateLifetime = true,
//            //        ValidateIssuerSigningKey = true,
//            //        ValidIssuer = Configuration["JWT:Issuer"],
//            //        ValidAudience = Configuration["JWT:Audience"],
//            //        IssuerSigningKey = new SymmetricSecurityKey(Key)
//            //    };
//            //});

//            //services.AddSingleton<IJWTManagerRepository, JWTManagerRepository>();



//        }

//        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
//        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
//        {
//            app.UseCors(options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

//            if (env.IsDevelopment())
//            {
//                app.UseDeveloperExceptionPage();
//            }

//            app.UseRouting();

//            app.UseAuthentication(); // This need to be added	

//            app.UseAuthorization();

//            app.UseEndpoints(endpoints =>
//            {
//                endpoints.MapControllers();
//            });
//        }

//    }
//}

