﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Tab
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Бригада.
    /// </summary>
    // *** Start programmer edit section *** (Бригада CustomAttributes)

    // *** End programmer edit section *** (Бригада CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("БригадаE", new string[] {
            "начбр as \'Начбр\'",
            "конбр as \'Конбр\'",
            "назначение as \'Назначение\'"})]
    [AssociatedDetailViewAttribute("БригадаE", "Состав", "СоставE", true, "", "Состав", true, new string[] {
            ""})]
    [View("БригадаL", new string[] {
            "начбр as \'Начбр\'",
            "конбр as \'Конбр\'",
            "назначение as \'Назначение\'"})]
    public class Бригада : ICSSoft.STORMNET.DataObject
    {
        
        private string fначбр;
        
        private string fконбр;
        
        private string fназначение;
        
        private IIS.Tab.DetailArrayOfСостав fСостав;
        
        // *** Start programmer edit section *** (Бригада CustomMembers)

        // *** End programmer edit section *** (Бригада CustomMembers)

        
        /// <summary>
        /// конбр.
        /// </summary>
        // *** Start programmer edit section *** (Бригада.конбр CustomAttributes)

        // *** End programmer edit section *** (Бригада.конбр CustomAttributes)
        [StrLen(255)]
        public virtual string конбр
        {
            get
            {
                // *** Start programmer edit section *** (Бригада.конбр Get start)

                // *** End programmer edit section *** (Бригада.конбр Get start)
                string result = this.fконбр;
                // *** Start programmer edit section *** (Бригада.конбр Get end)

                // *** End programmer edit section *** (Бригада.конбр Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Бригада.конбр Set start)

                // *** End programmer edit section *** (Бригада.конбр Set start)
                this.fконбр = value;
                // *** Start programmer edit section *** (Бригада.конбр Set end)

                // *** End programmer edit section *** (Бригада.конбр Set end)
            }
        }
        
        /// <summary>
        /// назначение.
        /// </summary>
        // *** Start programmer edit section *** (Бригада.назначение CustomAttributes)

        // *** End programmer edit section *** (Бригада.назначение CustomAttributes)
        [StrLen(255)]
        public virtual string назначение
        {
            get
            {
                // *** Start programmer edit section *** (Бригада.назначение Get start)

                // *** End programmer edit section *** (Бригада.назначение Get start)
                string result = this.fназначение;
                // *** Start programmer edit section *** (Бригада.назначение Get end)

                // *** End programmer edit section *** (Бригада.назначение Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Бригада.назначение Set start)

                // *** End programmer edit section *** (Бригада.назначение Set start)
                this.fназначение = value;
                // *** Start programmer edit section *** (Бригада.назначение Set end)

                // *** End programmer edit section *** (Бригада.назначение Set end)
            }
        }
        
        /// <summary>
        /// начбр.
        /// </summary>
        // *** Start programmer edit section *** (Бригада.начбр CustomAttributes)

        // *** End programmer edit section *** (Бригада.начбр CustomAttributes)
        [StrLen(255)]
        public virtual string начбр
        {
            get
            {
                // *** Start programmer edit section *** (Бригада.начбр Get start)

                // *** End programmer edit section *** (Бригада.начбр Get start)
                string result = this.fначбр;
                // *** Start programmer edit section *** (Бригада.начбр Get end)

                // *** End programmer edit section *** (Бригада.начбр Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Бригада.начбр Set start)

                // *** End programmer edit section *** (Бригада.начбр Set start)
                this.fначбр = value;
                // *** Start programmer edit section *** (Бригада.начбр Set end)

                // *** End programmer edit section *** (Бригада.начбр Set end)
            }
        }
        
        /// <summary>
        /// Бригада.
        /// </summary>
        // *** Start programmer edit section *** (Бригада.Состав CustomAttributes)

        // *** End programmer edit section *** (Бригада.Состав CustomAttributes)
        public virtual IIS.Tab.DetailArrayOfСостав Состав
        {
            get
            {
                // *** Start programmer edit section *** (Бригада.Состав Get start)

                // *** End programmer edit section *** (Бригада.Состав Get start)
                if ((this.fСостав == null))
                {
                    this.fСостав = new IIS.Tab.DetailArrayOfСостав(this);
                }
                IIS.Tab.DetailArrayOfСостав result = this.fСостав;
                // *** Start programmer edit section *** (Бригада.Состав Get end)

                // *** End programmer edit section *** (Бригада.Состав Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Бригада.Состав Set start)

                // *** End programmer edit section *** (Бригада.Состав Set start)
                this.fСостав = value;
                // *** Start programmer edit section *** (Бригада.Состав Set end)

                // *** End programmer edit section *** (Бригада.Состав Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "БригадаE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View БригадаE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("БригадаE", typeof(IIS.Tab.Бригада));
                }
            }
            
            /// <summary>
            /// "БригадаL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View БригадаL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("БригадаL", typeof(IIS.Tab.Бригада));
                }
            }
        }
    }
}
