$(document).ready(function () {
    // Sidebar Expand/Collapse Toggle (Desktop)
    $('#sidebar-expand-toggle').on('click', function() {
        const sidebar = $('#sidebar');
        const expandIcon = $('#sidebar-expand-icon');
        const collapseIcon = $('#sidebar-collapse-icon');
        const isExpanded = sidebar.attr('data-sidebar-expanded') === 'true';
        
        if (isExpanded) {
            // Collapse sidebar
            sidebar.attr('data-sidebar-expanded', 'false');
            expandIcon.addClass('hidden');
            collapseIcon.removeClass('hidden');
            localStorage.setItem('sidebarExpanded', 'false');
        } else {
            // Expand sidebar
            sidebar.attr('data-sidebar-expanded', 'true');
            expandIcon.removeClass('hidden');
            collapseIcon.addClass('hidden');
            localStorage.setItem('sidebarExpanded', 'true');
        }
    });

    // Restore sidebar state from localStorage
    const sidebarExpanded = localStorage.getItem('sidebarExpanded');
    if (sidebarExpanded === 'false') {
        const sidebar = $('#sidebar');
        const expandIcon = $('#sidebar-expand-icon');
        const collapseIcon = $('#sidebar-collapse-icon');
        sidebar.attr('data-sidebar-expanded', 'false');
        expandIcon.addClass('hidden');
        collapseIcon.removeClass('hidden');
    }

    // Sidebar Toggle (Mobile)
    $('#sidebar-toggle').on('click', function() {
        const sidebar = $('#mobile-sidebar');
        const isRTL = $('body').hasClass('rtl');
        
        if (isRTL) {
            sidebar.removeClass('-translate-x-full').addClass('translate-x-0');
        } else {
            sidebar.removeClass('-translate-x-full').addClass('translate-x-0');
        }
        
        $('#sidebar-overlay').removeClass('hidden');
        $('body').addClass('overflow-hidden');
    });

    $('#close-sidebar, #sidebar-overlay').on('click', function() {
        const sidebar = $('#mobile-sidebar');
        const isRTL = $('body').hasClass('rtl');
        
        if (isRTL) {
            sidebar.removeClass('translate-x-0').addClass('-translate-x-full');
        } else {
            sidebar.removeClass('translate-x-0').addClass('-translate-x-full');
        }
        
        $('#sidebar-overlay').addClass('hidden');
        $('body').removeClass('overflow-hidden');
    });

    // Mobile Menu Toggle (Guest Mode)
    $('#mobile-menu-toggle').on('click', function() {
        $('#mobile-menu').toggleClass('hidden');
    });

    // Dropdown toggle
    $('[data-toggle="dropdown"]').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const dropdown = $(this).siblings('.dropdown-menu').first();
        const isExpanded = $(this).attr('aria-expanded') === 'true';
        
        // Close other dropdowns
        $('.dropdown-menu').not(dropdown).addClass('hidden');
        
        // Toggle current dropdown
        dropdown.toggleClass('hidden');
        $(this).attr('aria-expanded', !isExpanded);
    });

    // Close dropdowns when clicking outside
    $(document).on('click', function(e) {
        if (!$(e.target).closest('[data-toggle="dropdown"]').length && !$(e.target).closest('.dropdown-menu').length) {
            $('.dropdown-menu').addClass('hidden');
            $('[data-toggle="dropdown"]').attr('aria-expanded', 'false');
        }
    });

    // Theme Toggle
    const themeToggle = $('#theme-toggle');
    const themeIconSun = $('#theme-icon-sun');
    const themeIconMoon = $('#theme-icon-moon');
    const themeBody = $('#theme-body');
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        themeBody.addClass('dark');
        document.documentElement.classList.add('dark');
        themeIconSun.addClass('hidden');
        themeIconMoon.removeClass('hidden');
    } else {
        themeBody.removeClass('dark');
        document.documentElement.classList.remove('dark');
        themeIconSun.removeClass('hidden');
        themeIconMoon.addClass('hidden');
    }

    themeToggle.on('click', function() {
        const isDark = themeBody.hasClass('dark');
        
        if (isDark) {
            // Switch to light mode
            themeBody.removeClass('dark');
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            themeIconSun.removeClass('hidden');
            themeIconMoon.addClass('hidden');
        } else {
            // Switch to dark mode
            themeBody.addClass('dark');
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            themeIconSun.addClass('hidden');
            themeIconMoon.removeClass('hidden');
        }
    });

    // Close mobile sidebar on window resize
    $(window).on('resize', function() {
        if ($(window).width() >= 1024) {
            const sidebar = $('#mobile-sidebar');
            sidebar.removeClass('translate-x-0').addClass('-translate-x-full');
            $('#sidebar-overlay').addClass('hidden');
            $('body').removeClass('overflow-hidden');
        }
    });

    // Tooltip initialization (if using Bootstrap JS for tooltips)
    if (typeof $().tooltip === 'function') {
        $('[data-toggle="tooltip"]').tooltip();
    }

    // FAQ Accordion
    $('.faq-question').on('click', function() {
        const faqItem = $(this).closest('.faq-item');
        const faqAnswer = faqItem.find('.faq-answer');
        const faqIcon = $(this).find('.faq-icon');
        const isOpen = !faqAnswer.hasClass('hidden');
        const isExpanded = $(this).attr('aria-expanded') === 'true';

        // Close all other FAQ items
        $('.faq-item').not(faqItem).each(function() {
            $(this).find('.faq-answer').addClass('hidden');
            $(this).find('.faq-question').removeClass('font-semibold text-gray-900').addClass('font-medium text-gray-700').attr('aria-expanded', 'false');
            $(this).removeClass('border-2 border-primary-200').addClass('border border-gray-200');
            $(this).find('.faq-icon').html('<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />');
        });

        if (isOpen) {
            // Close current item
            faqAnswer.addClass('hidden');
            $(this).removeClass('font-semibold text-gray-900').addClass('font-medium text-gray-700').attr('aria-expanded', 'false');
            faqItem.removeClass('border-2 border-primary-200').addClass('border border-gray-200');
            faqIcon.html('<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />');
        } else {
            // Open current item
            faqAnswer.removeClass('hidden');
            $(this).removeClass('font-medium text-gray-700').addClass('font-semibold text-gray-900').attr('aria-expanded', 'true');
            faqItem.removeClass('border border-gray-200').addClass('border-2 border-primary-200');
            faqIcon.html('<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />');
        }
    });

    // Open first FAQ item by default
    $('.faq-item').first().find('.faq-question').trigger('click');

    // Service Tabs
    $('.service-tab').on('click', function() {
        const tabName = $(this).data('tab');
        const tabId = $(this).attr('id');
        const panelId = `service-tab-panel-${tabName}`;
        
        // Remove active class from all tabs and update ARIA
        $('.service-tab').removeClass('active text-white bg-primary-500 shadow-md').addClass('text-gray-700').attr('aria-selected', 'false').attr('tabindex', '-1');
        
        // Add active class to clicked tab and update ARIA
        $(this).addClass('active text-white bg-primary-500 shadow-md').removeClass('text-gray-700').attr('aria-selected', 'true').attr('tabindex', '0');
        
        // Hide all tab panels
        $('.service-tab-panel').addClass('hidden').removeClass('active').attr('tabindex', '-1');
        
        // Show selected tab panel
        const selectedPanel = $(`.service-tab-panel[data-content="${tabName}"]`);
        selectedPanel.removeClass('hidden').addClass('active').attr('tabindex', '0');
        
        // Focus the panel for keyboard navigation
        selectedPanel.focus();
    });

    // Scroll to Top Button
    const scrollToTopBtn = $('#scroll-to-top');
    
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 300) {
            scrollToTopBtn.removeClass('hidden');
        } else {
            scrollToTopBtn.addClass('hidden');
        }
    });

    scrollToTopBtn.on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    });

    // Truth Tabs Navigation
    $('.truth-tab').on('click', function() {
        const tabName = $(this).data('tab');
        const tabId = $(this).attr('id');
        const panelId = `truth-tab-panel-${tabName.split('-')[1]}`;
        
        // Remove active class from all tabs and update ARIA
        $('.truth-tab').removeClass('active border-2 border-primary-200 dark:border-primary-500/50').addClass('border border-gray-200 dark:border-dark-tertiary').attr('aria-selected', 'false').attr('tabindex', '-1');
        
        // Add active class to clicked tab and update ARIA
        $(this).addClass('active border-2 border-primary-200 dark:border-primary-500/50').removeClass('border border-gray-200 dark:border-dark-tertiary').attr('aria-selected', 'true').attr('tabindex', '0');
        
        // Hide all tab panels
        $('.truth-tab-panel').addClass('hidden').removeClass('active').attr('tabindex', '-1');
        
        // Show selected tab panel
        const selectedPanel = $(`.truth-tab-panel[data-content="${tabName}"]`);
        selectedPanel.removeClass('hidden').addClass('active').attr('tabindex', '0');
        
        // Focus the panel for keyboard navigation
        selectedPanel.focus();
    });

    // New Order Page: Show service description in sidebar when service is selected
    if ($('#orderform-service').length) {
        // Listen for service selection change
        $(document).on('change', '#orderform-service', function() {
            const serviceId = $(this).val();
            const sidebarDescription = $('#service_description_sidebar');
            
            if (serviceId && serviceId !== '') {
                // Show sidebar description
                sidebarDescription.removeClass('hidden');
            } else {
                // Hide sidebar description if no service selected
                sidebarDescription.addClass('hidden');
            }
        });

        // Also listen for custom select events (if using select2 or similar)
        $(document).on('select2:select', '#orderform-service', function() {
            const serviceId = $(this).val();
            const sidebarDescription = $('#service_description_sidebar');
            
            if (serviceId && serviceId !== '') {
                sidebarDescription.removeClass('hidden');
            } else {
                sidebarDescription.addClass('hidden');
            }
        });

        // Check if service is already selected on page load
        if ($('#orderform-service').val()) {
            $('#service_description_sidebar').removeClass('hidden');
        }
    }
});
const COUNTRIES=["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo (Brazzaville)","Congo (Kinshasa)","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Korea, North","Korea, South","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar (Burma)","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Macedonia","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"];
